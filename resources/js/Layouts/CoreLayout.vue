<script setup>
import Sidebar from '@/Pages/Dashboard/Sidebar.vue';
import Header from '@/Pages/Dashboard/Header.vue';
import { useToast } from 'primevue/usetoast';
import { usePage } from '@inertiajs/vue3';
import { watch } from 'vue';

const props = defineProps({
    title : String,
})

const toast = useToast();
const $page = usePage();

watch(() => $page.props.flash, flash => {
    if(flash.message) {
        toast.add({ severity: flash.status, summary: flash.status, detail: flash.message, life: 3000 });
    }
});

watch(() => $page.props.errors, errors => {
    if (errors) {
        Object.keys(errors).forEach(key => {
            toast.add({
                severity: 'error',
                summary: 'Error',
                detail: errors[key],
                life: 3000
            });
        });
    }
});

</script>

<template>
    <div class="flex min-h-screen bg-gray-50">

        <Sidebar class="basis-1/5 2xl:basis-1/6"/>

        <div class="basis-4/5 2xl:basis-5/6 flex flex-col">
            <Header :title="title"/>
            <div class="flex-grow">
                <slot />
            </div>
        </div>

        <Toast position="bottom-right"></Toast>
    </div>
</template>