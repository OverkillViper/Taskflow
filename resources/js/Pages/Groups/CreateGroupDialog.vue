<script setup>
import Dialog from 'primevue/dialog';
import Button from '@/Components/TaskflowComponents/Button.vue';
import { ref } from "vue";
import { useForm } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';
import ColorPicker from 'primevue/colorpicker';

const visible = ref(false);

const createGroupForm = useForm({
    title : '',
    color : '9c82f7'
})

const createNewGroup = () => {
    createGroupForm.post(route('groups.store'), {
        onFinish: () => {
            createGroupForm.reset();
            visible.value = false;
        },
    });
}

</script>

<template>
    <div>
        <Button label="Create new group" icon="plus" @click="visible = true" class="w-full"/>

        <Dialog v-model:visible="visible" modal header="" :style="{ width: '25rem' }">
            <template #header>
                <div class="inline-flex items-center justify-center gap-2">
                    <div class="bg-gray-700 text-white w-8 h-8 rounded-xl flex items-center justify-center">
                        <i class="pi pi-plus" style="font-size: 0.8rem; "></i>
                    </div>
                    
                    <span class="font-semibold whitespace-nowrap">Create New Group</span>
                </div>
            </template>

            <form @submit.prevent class="flex items-center gap-x-4">
                <InputText type="text" v-model="createGroupForm.title" placeholder="Group title" variant="filled" class="flex-grow" @keyup.enter="createNewGroup"/>
                <ColorPicker v-model="createGroupForm.color"/>
            </form>

            <template #footer>
                <Button label="Cancel" icon="times" outline text @click="visible = false"/>
                <Button label="Create" icon="plus" severity="help" @click="createNewGroup"/>
            </template>
        </Dialog>
    </div>
    
</template>