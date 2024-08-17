<script setup>
import Dialog from 'primevue/dialog';
import Button from '@/Components/TaskflowComponents/Button.vue';
import { ref } from "vue";
import { useForm, usePage } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';

const visible = ref(false);

const $page = usePage();
const groups = $page.props.taskGroups;

const taskCreateForm = useForm({
    title           : '',
    deadline        : null,
    task_group_id   : null,
})

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();

const minDate = ref(new Date());

minDate.value.setMonth(month);
minDate.value.setFullYear(year);

const createTask = () => {    
    taskCreateForm.task_group_id = taskCreateForm.task_group_id == null ? null : taskCreateForm.task_group_id.id;

    taskCreateForm.post(route('tasks.store'), {
        onFinish: () => {
            taskCreateForm.title         = '';
            taskCreateForm.deadline      = null;
            taskCreateForm.task_group_id = null;
            visible.value = false;
        },
    });
}

</script>

<template>
    <div>
        <button class="cursor-default w-16 h-16 rounded-lg border-2 border-accent bg-gray-50 hover:bg-white hover:rounded-2xl transition-all flex justify-center items-center" @click="visible = true">
            <i class="pi pi-plus" style="font-size: 1rem"></i>
        </button>

        <Dialog v-model:visible="visible" modal header="Create New Task" :style="{ width: '35rem' }">
            <template #header>
                <div class="inline-flex items-center justify-center gap-2">
                    <i class="pi pi-plus" style="font-size: 0.8rem; "></i>
                    <span class="font-semibold whitespace-nowrap">Create New Task</span>
                </div>
            </template>

            <form @submit.prevent>
                <div>
                    <InputText type="text" v-model="taskCreateForm.title" variant="filled" size="small" class="w-full" placeholder="Task title"/>
                </div>
                <div class="flex items-center mt-4 gap-x-4 font-medium">
                    <DatePicker :minDate="minDate" v-model="taskCreateForm.deadline" showIcon fluid iconDisplay="input" placeholder="Task deadline" variant="filled" class="basis-1/2">
                        <template #inputicon="slotProps">
                            <i class="pi pi-calendar" @click="slotProps.clickCallback" />
                        </template>
                    </DatePicker>
                    <Select showClear v-model="taskCreateForm.task_group_id" :options="groups" filter optionLabel="title" placeholder="Select a group" class="w-full basis-1/2" variant="filled">
                        <template #value="slotProps">
                            <div v-if="slotProps.value" class="flex items-center">
                                <div>{{ slotProps.value.title }}</div>
                            </div>
                            <span v-else>
                                {{ slotProps.placeholder }}
                            </span>
                        </template>
                        <template #option="slotProps">
                            <div class="flex items-center">
                                <div>{{ slotProps.option.title }}</div>
                            </div>
                        </template>
                    </Select>
                </div>
            </form>

            <template #footer>
                <Button label="Cancel" icon="times" outline text @click="visible = false"/>
                <Button label="Create" icon="plus" @click="createTask"/>
            </template>
        </Dialog>
    </div>
    
</template>

<style scoped>

</style>