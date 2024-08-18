<script setup>
import { useToast } from 'primevue/usetoast';
import { usePage } from '@inertiajs/vue3';
import { watch } from 'vue';

const toast = useToast();
const $page = usePage();

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
    <div class="min-h-screen grid grid-cols-2 2xl:grid-cols-3 sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 main">
        <div class="2xl:col-span-2 flex justify-center items-center">
            <img src="/images/logo.png" class="w-16 h-16 shadow-md rounded-3xl"/>
            <div class="font-semibold text-4xl ms-6">Taskflow</div>
        </div>
        <div
            class="w-full sm:max-w-md mt-6 p-8 bg-white shadow-md overflow-hidden sm:rounded-lg border border-y-8 border-x-0 border-gray-300"
        >
            <slot />
        </div>
        <Toast position="bottom-right"></Toast>
    </div>
    
</template>

<style scoped>
    .main {
        background: url('/images/background.png');
    }
</style>
