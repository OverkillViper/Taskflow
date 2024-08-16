<script setup>
import Dialog from 'primevue/dialog';
import Button from '@/Components/TaskflowComponents/Button.vue';
import { ref } from "vue";
import { useForm } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';
import ColorPicker from 'primevue/colorpicker';

const visible = ref(false);

const props = defineProps({
    group : Object
})

const updateGroupForm = useForm({
    title : props.group.title,
    color : props.group.color
})

const updateGroup = () => {
    updateGroupForm.put(route('groups.update', props.group.id), {
        onFinish: () => {
            updateGroupForm.reset();
            visible.value = false;
        },
    });
}

</script>

<template>
    <div>
        <Button label="Modify" icon="pencil" @click="visible = true"/>

        <Dialog v-model:visible="visible" modal header="Modify Group" :style="{ width: '25rem' }">
            <template #header>
                <div class="inline-flex items-center justify-center gap-2">
                    <div class="bg-gray-700 text-white w-8 h-8 rounded-xl flex items-center justify-center">
                        <i class="pi pi-plus" style="font-size: 0.8rem; "></i>
                    </div>
                    
                    <span class="font-semibold whitespace-nowrap">Modify Group</span>
                </div>
            </template>

            <form @submit.prevent class="flex items-center gap-x-4">
                <InputText type="text" v-model="updateGroupForm.title" placeholder="Group title" variant="filled" class="flex-grow"/>
                <ColorPicker v-model="updateGroupForm.color"/>
            </form>

            <template #footer>
                <Button label="Cancel" icon="times" outline text @click="visible = false"/>
                <Button label="Update" icon="save" severity="help" @click="updateGroup"/>
            </template>
        </Dialog>
    </div>
    
</template>