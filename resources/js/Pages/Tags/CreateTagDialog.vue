<script setup>
import Dialog from 'primevue/dialog';
import Button from '@/Components/TaskflowComponents/Button.vue';
import { ref } from "vue";
import { useForm } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';

const visible = ref(false);

const createTagForm = useForm({
    name : '',
})

const createNewTag = () => {
    createTagForm.post(route('tags.store'), {
        onFinish: () => {
            createTagForm.reset();
            visible.value = false;
        },
    });
}

</script>

<template>
    <div>
        <Button label="Create new tag" icon="plus" @click="visible = true" class="w-full"/>

        <Dialog v-model:visible="visible" modal header="" :style="{ width: '25rem' }">
            <template #header>
                <div class="inline-flex items-center justify-center gap-2">
                    <div class="bg-gray-700 text-white w-8 h-8 rounded-xl flex items-center justify-center">
                        <i class="pi pi-plus" style="font-size: 0.8rem; "></i>
                    </div>
                    
                    <span class="font-semibold whitespace-nowrap">Create New Tag</span>
                </div>
            </template>

            <form @submit.prevent class="flex items-center gap-x-4">
                <InputText type="text" v-model="createTagForm.name" placeholder="Tag name" variant="filled" class="flex-grow" @keyup.enter="createNewTag"/>
            </form>

            <template #footer>
                <Button label="Cancel" icon="times" outline text @click="visible = false"/>
                <Button label="Create" icon="plus" severity="help" @click="createNewTag"/>
            </template>
        </Dialog>
    </div>
    
</template>