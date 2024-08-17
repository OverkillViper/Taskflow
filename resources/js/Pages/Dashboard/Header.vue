<script setup>
import { Head, useForm, Link } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';
import Button from '@/Components/TaskflowComponents/Button.vue';
import Notifications from '@/Pages/Dashboard/Notifications.vue'

const props = defineProps({
    title : String,
});

const searchForm = useForm({
    q : null,
});

function goBack() {
    history.back();
}

const search = () => {
    searchForm.get(route('search'));
}

</script>

<template>
    <Head :title="title"/>
    <div class="flex py-4 px-6 justify-between items-center">
        <div class="flex items-center font-semibold text-lg basis-1/3 capitalize">
            <div class="me-2" @click="goBack" v-if="props.title != 'Dashboard'"><span class="pi pi-angle-left"></span></div>
            {{ title }}
        </div>
        <form @submit.prevent="search" class="flex items-center basis-1/3">
            <InputText v-model="searchForm.q" text size="small" placeholder="Seach for Task, Groups or Tags" class="w-96"/>
            <Button label="Search" class="ms-2" icon="search" type="submit"/>
        </form>
        <div class="flex items-center basis-1/3 justify-end">
            <Notifications />
        </div>
    </div>
</template>