<script setup>
import Button from '@/Components/TaskflowComponents/Button.vue';
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import Dialog from 'primevue/dialog';
import FileUpload from 'primevue/fileupload';
import Divider from 'primevue/divider';
import { usePrimeVue } from 'primevue/config';

const $primevue = usePrimeVue();
const visible = ref(false);

const pictureForm = useForm({
    avatar : '',
});

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const formatSize = (bytes) => {
    const k = 1024;
    const dm = 3;
    const sizes = $primevue.config.locale.fileSizeTypes;

    if (bytes === 0) {
        return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
};

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
    removeFileCallback(index);
    totalSize.value -= parseInt(formatSize(file.size));
    totalSizePercent.value = totalSize.value / 10;
};

const onSelectedFiles = (event) => {
    const file = event.files[0];

    pictureForm.avatar = file;
};

const uploadImage = (event) => {
    const file = event.files[0];
    pictureForm.avatar = file;

}

const changeProfilePicture = () => {
    pictureForm.post(route('profile.avatar.update'), {
        onFinish: () => {
            pictureForm.reset();
            visible.value = false;
        },
    });
};

</script>

<template>
    <div class="flex items-center hover:bg-gray-200 p-2 rounded-md transition" @click="visible = true">
        <span class="pi pi-pencil" style="font-size: 0.8rem;"></span>
        <div class="text-sm font-medium ms-2">Change</div>
    </div>
    
    <Dialog v-model:visible="visible" modal header="Change Profile Picture" :style="{ width: '25rem' }" class="dialog">
        <template #header>
            <div class="inline-flex items-center justify-center gap-2">
                <div class="bg-gray-700 text-white w-8 h-8 rounded-xl flex items-center justify-center">
                    <i class="pi pi-image" style="font-size: 0.8rem; "></i>
                </div>
                
                <span class="font-semibold whitespace-nowrap">Change Avatar</span>
            </div>
        </template>

        <form @submit.prevent>
            <FileUpload mode="advanced" accept="image/*" class="border-0" :multiple="false" @select="onSelectedFiles">
                <template #header="{ chooseCallback, clearCallback, files }">
                    <button @click="chooseCallback()" class="bg-gray-100 text-sm font-semibold px-4 py-2 rounded-md capitalize w-full" v-if="files.length == 0">
                        Choose profile picture
                    </button>
                    <div></div>
                </template>
                <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
                    <div class="flex flex-col">
                        <div v-if="files.length > 0">
                            <div class="flex flex-col gap-4">
                                <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="flex items-center bg-gray-100 rounded-md border p-2">
                                    <div>
                                        <img role="presentation" :alt="file.name" :src="file.objectURL" class="w-12 aspect-square object-cover rounded-md"/>
                                    </div>
                                    <div class="px-2 text-sm flex-grow">
                                        <div class="font-semibold">
                                            {{ file.name }}
                                        </div>
                                        <div>
                                            {{ formatSize(file.size) }}
                                        </div>
                                    </div>
                                    <button @click="onRemoveTemplatingFile(file, removeFileCallback, index)" class="flex items-center justify-center border rounded-md p-1">
                                        <span class="pi pi-times"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template #empty>
                    <Divider align="center" type="solid">
                        <div class="text-gray-500">
                            OR
                        </div>
                    </Divider>
                    <div class="flex flex-col justify-center items-center border border-dashed border-gray-400 rounded-md p-5 bg-gray-100">
                        <div class="flex">
                            <span class="pi pi-cloud-upload rounded-full border bg-gray-50 border-dashed border-gray-400 p-3"></span>
                        </div>
                        <div class="mt-2 font-medium text-sm">Drag and drop files here to upload</div>
                    </div>
                </template>
            </FileUpload>
            <div class="flex justify-between mt-4">
                <Button @click="visible = false" prefixIcon="close" label="Cancel" />
                <Button @click="changeProfilePicture" type="submit" prefixIcon="save" label="Update" :class="{ 'opacity-75': pictureForm.processing }" :disabled="pictureForm.processing"/>
            </div>
        </form>
    </Dialog>
</template>

<style scoped>
.p-fileupload {
    @apply border-0;
}

.p-divider {
    @apply m-0 mb-1 -mt-3 font-semibold;
}
</style>