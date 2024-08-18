<script setup>
import CoreLayout from '@/Layouts/CoreLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Link } from '@inertiajs/vue3';
import Button from '@/Components/TaskflowComponents/Button.vue';


defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
</script>

<template>

    <CoreLayout title="Profile">
        <div class="py-12">
            <div class="w-2/3 mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow-sm rounded-lg border">
                    <UpdateProfileInformationForm
                        :must-verify-email="mustVerifyEmail"
                        :status="status"
                    />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow-sm rounded-lg border">
                    <UpdatePasswordForm class="max-w-xl" />
                </div>

                <div class="p-4 sm:p-8 bg-white shadow-sm rounded-lg border">
                    <DeleteUserForm  />
                </div>
            </div>
        </div>
    </CoreLayout>
</template>
