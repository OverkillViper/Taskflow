<script setup>
import Button from '@/Components/TaskflowComponents/Button.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import Password from 'primevue/password';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <section>   
        <div class="font-semibold">
            Update Password
        </div>
        <div class="text-sm font-medium text-gray-500">
            Ensure your account is using a long, random password to stay secure.
        </div>

        <form @submit.prevent="updatePassword" class="mt-6 space-y-6">
            <div>
                <div class="text-sm font-medium text-gray-500 mb-2">Current Password</div>
                <Password v-model="form.current_password" :feedback="false" toggleMask variant="filled" placeholder="Password" fluid />
            </div>

            <div>
                <div class="text-sm font-medium text-gray-500 mb-2">New Password</div>
                <Password v-model="form.password" :feedback="false" toggleMask variant="filled" placeholder="Password" fluid />
            </div>

            <div>
                <div class="text-sm font-medium text-gray-500 mb-2">Confirm Password</div>
                <Password v-model="form.password_confirmation" :feedback="false" toggleMask variant="filled" placeholder="Password" fluid />
            </div>

            <div class="flex items-center gap-4">
                <Button label="Save" icon="save" :disabled="form.processing" class="w-36"/>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
