<script setup>
import { Head, useForm, Link, usePage } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';
import Button from '@/Components/TaskflowComponents/Button.vue';
import Avatar from 'primevue/avatar';
import Popover from 'primevue/popover';
import { ref } from "vue";

const $page = usePage();
const user = $page.props.auth.user;

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

const pop = ref();

const toggle = (event) => {
    pop.value.toggle(event);
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
            <div v-if="user.avatar">
                <Avatar :image="`/storage/${user.avatar}`" @click="toggle" class="shadow-md border overflow-hidden"/>
            </div>
            <Avatar icon="pi pi-user" class="border border-transparent hover:border-gray-700 transition" @click="toggle" v-else/>
            <Popover ref="pop">
                <div class="flex flex-col w-[10rem] p-1">
                    <Link :href="route('profile.edit')" class="flex items-center hover:bg-gray-200 p-2 rounded-md transition">
                        <span class="pi pi-user" style="font-size: 0.8rem;"></span>
                        <div class="text-sm font-medium ms-2">Profile</div>
                    </Link>
                    <Link :href="route('logout')" method="post" as="button" class="flex items-center hover:bg-gray-200 p-2 rounded-md transition">
                        <span class="pi pi-power-off" style="font-size: 0.8rem;"></span>
                        <div class="text-sm font-medium ms-2">Sign out</div>
                    </Link>
                </div>
            </Popover>
        </div>
    </div>
</template>