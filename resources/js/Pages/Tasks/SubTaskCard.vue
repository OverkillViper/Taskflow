<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import Checkbox from 'primevue/checkbox';
import { ref, watch } from 'vue';
import InputText from 'primevue/inputtext';

const editing = ref(false);

const props = defineProps({
    subtask : Object
});

const subtaskForm = useForm({
    title       : props.subtask.title,
    completed   : (props.subtask.completed === 1),
});

watch(() => props.subtask, (newSubtask) => {
        subtaskForm.title = newSubtask.title;
        subtaskForm.completed = newSubtask.completed === 1;
    },
    { deep: true }
);

const subTaskDeleteForm = useForm({
    title : ''
});

const updateSubtaskForm = () => {
    subtaskForm.put(route('subtasks.update', props.subtask.id));
    editing.value = false;
}

const changeStatus = () => {
    console.log(subtaskForm.completed);
    
    subtaskForm.put(route('tasks.subtasks.status.change', props.subtask.id));
}

const deleteSubtask = () => {
    subTaskDeleteForm.delete(route('subtasks.destroy', props.subtask.id))
}

</script>

<template>
    <form @submit.prevent class="flex items-center py-2 ps-3 pe-4 border border-transparent hover:border-gray-200 hover:bg-white rounded-md gap-x-4 h-12">
        <Checkbox v-model="subtaskForm.completed" binary variant="filled" :disabled="editing" @update:model-value="changeStatus"/>
        <InputText v-model="subtaskForm.title" variant="filled" size="small" class="flex-grow text-sm font-medium" v-if="editing" @keydown.meta.enter="updateSubtaskForm"/>
        <div class="ps-3 flex-grow font-medium items-center text-sm select-none" v-else>
            {{ subtask.title }}
        </div>
        <i class="pi text-gray-400 hover:text-gray-700 transition"          style="font-size: .7rem" @click="editing = !editing" :class="editing ? 'pi-times' : 'pi-pencil'"></i>
        <i class="pi pi-check text-gray-400 hover:text-gray-700 transition" style="font-size: .7rem" v-if="editing" @click="updateSubtaskForm"></i>
        <i class="pi pi-trash text-gray-400 hover:text-gray-700 transition" style="font-size: .7rem" v-else @click="deleteSubtask"></i>
    </form>
</template> 