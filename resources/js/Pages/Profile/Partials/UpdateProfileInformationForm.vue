<script setup>
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import Button from '@/Components/TaskflowComponents/Button.vue';
import ChangeProfilePictureDialog from './ChangeProfilePictureDialog.vue';
import Popover from 'primevue/popover';
import { ref, watch } from 'vue';


const props = defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
});

const pop = ref();
const menuVisible = ref(false);

const toggle = (event) => {
    pop.value.toggle(event);
    menuVisible.value = !menuVisible.value;
}

// watch(() => usePage().props.auth.user.avatar);

</script>

<template>
    <div>
        <div class="font-semibold">
            Update Profile Inforamtion
        </div>
        <div class="text-sm font-medium text-gray-500">
            Update your account's profile information and email address.
        </div>
        <div class="grid grid-cols-3 items-center mt-10">
            <form @submit.prevent="form.patch(route('profile.update'))" class="flex flex-col gap-y-4 col-span-2">
                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-user" style="font-size: 0.8rem;"></i>
                    </InputGroupAddon>
                    <InputText placeholder="Username" size="small" variant="filled" v-model="form.name"/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-envelope" style="font-size: 0.8rem;"></i>
                    </InputGroupAddon>
                    <InputText placeholder="Email" size="small" variant="filled" v-model="form.email" :disabled="true"/>
                </InputGroup>
                <div>
                    <Button label="Save" icon="save" class="w-36" type="submit"/>
                </div>
            </form>
            <div class="flex flex-col justify-end items-center">
                <div class="relative">
                    <button class="absolute top-0 -translate-y-1/3 right-0 translate-x-1/3 rounded-full border w-8 h-8 bg-white hover:bg-gray-100" @click="toggle">
                        <i class="pi" :class="menuVisible ? 'pi-times' : 'pi-ellipsis-v'"></i>
                    </button>
                    <Popover ref="pop" :dismissable="false">
                        <div class="flex flex-col w-[10rem] p-1">
                            <ChangeProfilePictureDialog />
                            <Link :href="route('profile.avatar.remove')" method="post" as="button" class="flex items-center hover:bg-gray-200 p-2 rounded-md transition">
                                <span class="pi pi-trash" style="font-size: 0.8rem;"></span>
                                <div class="text-sm font-medium ms-2">Remove</div>
                            </Link>
                        </div>
                    </Popover>
                    <img :src="`/storage/${user.avatar}`" alt="profile_picture" class="rounded-xl shadow-sm border w-40 h-40" v-if="user.avatar">
                    <div class="rounded-xl shadow-sm border w-40 h-40 flex items-center justify-center bg-gray-100 text-gray-400" v-else>
                        <i class="pi pi-user" style="font-size: 2rem;"></i>
                    </div>
                </div>
                <!-- <ChangeProfilePictureDialog /> -->
            </div>
        </div>
    </div>
    
        <!-- <header>
            <h2 class="text-lg font-medium text-gray-900">Profile Information</h2>

            <p class="mt-1 text-sm text-gray-600">
                Update your account's profile information and email address.
            </p>
        </header>

        <form @submit.prevent="form.patch(route('profile.update'))" class="mt-6 space-y-6">
            <div>
                <InputLabel for="name" value="Name" />

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div v-if="mustVerifyEmail && user.email_verified_at === null">
                <p class="text-sm mt-2 text-gray-800">
                    Your email address is unverified.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Click here to re-send the verification email.
                    </Link>
                </p>

                <div
                    v-show="status === 'verification-link-sent'"
                    class="mt-2 font-medium text-sm text-green-600"
                >
                    A new verification link has been sent to your email address.
                </div>
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form> -->
</template>
