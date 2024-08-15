<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';
import Button from '@/Components/TaskflowComponents/Button.vue';
import Notifications from '@/Pages/Dashboard/Notifications.vue'

const props = defineProps({
    title : String,
});

const searchForm = useForm({
    query : '',
});

</script>

<template>
    <Head :title="title"/>
    <div class="flex py-4 px-6 justify-between items-center">
        <div class="font-semibold text-lg basis-1/3">
            {{ title }}
        </div>
        <div class="flex items-center basis-1/3">
            <InputText v-model="searchForm.query" type="text" size="small" placeholder="Seach for Task, Groups or Tags" class="w-96"/>
            <Button label="Search" class="ms-2" icon="search"/>
        </div>
        <div class="flex items-center basis-1/3 justify-end">
            <Notifications />
        </div>
    </div>
</template>