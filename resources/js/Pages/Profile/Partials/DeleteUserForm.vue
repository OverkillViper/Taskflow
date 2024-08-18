<script setup>
import InputText from 'primevue/inputtext';
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';
import Button from '@/Components/TaskflowComponents/Button.vue';
import Dialog from 'primevue/dialog';

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value.focus());
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <div class="flex justify-between items-center">
            <div class="basis-2/3">
                <div class="font-semibold">Delete Account</div>
                <div class="text-sm font-medium text-gray-500">
                    Are you sure you want to delete your account?
                    Once your account is deleted, all of its resources and data will be permanently deleted.
                </div>
            </div>
            <div>
                <Button label="Delete Account" icon="user-minus" class="bg-red-600" @click="confirmUserDeletion"/>
            </div>
        </div>

        <Dialog v-model:visible="confirmingUserDeletion" modal header="Delete account" :style="{ width: '35rem' }">
            <template #header>
                <div class="inline-flex items-center justify-center gap-2">
                    <div class="bg-gray-700 text-white w-8 h-8 rounded-xl flex items-center justify-center">
                        <i class="pi pi-trash" style="font-size: 0.8rem; "></i>
                    </div>
                    
                    <span class="font-semibold whitespace-nowrap">Delete Account</span>
                </div>
            </template>

            <div class="font-medium">
                <div class="font-semibold">Are you sure you want to delete your account? Please type your password to confirm account deletation.</div>
                
                <div class="my-4">
                    <InputText v-model="form.password" variant="filled" size="small" class="w-full" placeholder="Enter password"/>
                </div>

                <div class="flex">
                    <span class="font-semibold">Note:</span>
                    <div class="font-medium ms-2">Once your account is deleted, all of its resources and data will be permanently deleted.</div>
                </div>
            </div>

            

            <template #footer>
                <Button label="Cancel" icon="times" outline text @click="visible = false"/>
                <Button label="Delete" icon="trash" @click="deleteUser" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"/>
            </template>
        </Dialog>

        <!-- <Modal :show="confirmingUserDeletion" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Are you sure you want to delete your account?
                </h2>

                <p class="mt-1 text-sm text-gray-600">
                    Are you sure you want to delete your account?
                    Once your account is deleted, all of its resources and data will be permanently deleted.
                </p>

                <div class="mt-6">
                    <InputLabel for="password" value="Password" class="sr-only" />

                    <TextInput
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-3/4"
                        placeholder="Password"
                        @keyup.enter="deleteUser"
                    />

                    <InputError :message="form.errors.password" class="mt-2" />
                </div>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeModal"> Cancel </SecondaryButton>

                    <DangerButton
                        class="ms-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteUser"
                    >
                        Delete Account
                    </DangerButton>
                </div>
            </div>
        </Modal> -->
    </section>
</template>
