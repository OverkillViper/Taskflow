<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Password from 'primevue/password';
import Button from '@/Components/TaskflowComponents/Button.vue';
import ProgressSpinner from 'primevue/progressspinner';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <div class="flex items-center justify-center h-96" v-if="form.processing">
            <ProgressSpinner
                style="width: 50px; height: 50px"
                strokeWidth="3"
                fill="transparent"
                animationDuration="1s"
                aria-label="Custom ProgressSpinner"
            />
        </div>

        <form @submit.prevent="submit" v-else>
            <div class="font-semibold text-2xl">Sign In</div>

            <InputGroup class="mt-10">
                <InputGroupAddon>
                    <i class="pi pi-envelope" style="font-size: 0.8rem;"></i>
                </InputGroupAddon>
                <InputText placeholder="Email" size="small" variant="filled" v-model="form.email"/>
            </InputGroup>
            <InputGroup class="mt-4">
                <InputGroupAddon>
                    <i class="pi pi-key" style="font-size: 0.8rem;"></i>
                </InputGroupAddon>
                <Password v-model="form.password" :feedback="false" toggleMask variant="filled" placeholder="Password"/>
            </InputGroup>   
            <div class="flex items-center mt-4">
                <Checkbox v-model="form.remember" :binary="true" />
                <div class="text-sm font-medium ms-2 text-gray-600 select-none flex-grow">Keep me logged in</div>
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none"
                >
                    Forgot your password?
                </Link>
            </div>
            <div class="flex justify-center mt-4">
                <Button label="Sign In" icon="sign-in" :class="{ 'opacity-50': form.processing }" :disabled="form.processing" class="w-40"/>
            </div>

            <hr class="my-8">

            <div class="text-center text-gray-500 font-medium">
                Don't have an account?
            </div>
            <div class="flex justify-center mt-4">
                <Link :href="route('register')">
                    <Button label="Register" icon="user-plus" :class="{ 'opacity-50': form.processing }" :disabled="form.processing" class="w-40"/>
                </Link>
            </div>
        </form>
    </GuestLayout>
</template>
