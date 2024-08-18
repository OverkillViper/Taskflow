<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Password from 'primevue/password';
import Button from '@/Components/TaskflowComponents/Button.vue';
import ProgressSpinner from 'primevue/progressspinner';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />

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
            <div class="font-semibold text-2xl">Register</div>

            <InputGroup class="mt-10">
                <InputGroupAddon>
                    <i class="pi pi-user" style="font-size: 0.8rem;"></i>
                </InputGroupAddon>
                <InputText placeholder="Name" size="small" variant="filled" v-model="form.name"/>
            </InputGroup>
            <InputGroup class="mt-4">
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
            <InputGroup class="mt-4">
                <InputGroupAddon>
                    <i class="pi pi-unlock" style="font-size: 0.8rem;"></i>
                </InputGroupAddon>
                <Password v-model="form.password_confirmation" :feedback="false" toggleMask variant="filled" placeholder="Confirm Password"/>
            </InputGroup>
            <div class="flex justify-center mt-4">
                <Button label="Register" icon="user-plus" :class="{ 'opacity-50': form.processing }" :disabled="form.processing"/>
            </div>
            <hr class="my-8">
            <div class="text-center text-gray-500 font-medium">
                Already have an account?
            </div>
            <div class="flex justify-center mt-4">
                <Link :href="route('login')">
                    <Button label="Sign In" icon="sign-in" :class="{ 'opacity-50': form.processing }" :disabled="form.processing"/>
                </Link>
            </div>
        </form>
        
    </GuestLayout>
</template>
