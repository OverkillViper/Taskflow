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

const props = defineProps({
    task : Object
})

const taskUpdateForm = useForm({
    title           : props.task.title,
    deadline        : props.task.deadline,
    task_group_id   : props.task.task_group,
})

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();

const minDate = ref(new Date());

minDate.value.setMonth(month);
minDate.value.setFullYear(year);

const updateTask = () => {    
    taskUpdateForm.task_group_id = taskUpdateForm.task_group_id.id;

    taskUpdateForm.put(route('tasks.update', props.task.id), {
        onFinish: () => {
            // taskUpdateForm.reset();
            taskUpdateForm.task_group_id = props.task.task_group;
            visible.value = false;
        },
    });
}

</script>

<template>
    <div>
        <Button label="Modify" icon="pencil" @click="visible = true"/>

        <Dialog v-model:visible="visible" modal header="Modify Task" :style="{ width: '35rem' }">
            <template #header>
                <div class="inline-flex items-center justify-center gap-2">
                    <i class="pi pi-plus" style="font-size: 0.8rem; "></i>
                    <span class="font-semibold whitespace-nowrap">Modify Task</span>
                </div>
            </template>

            <form @submit.prevent>
                <div>
                    <InputText type="text" v-model="taskUpdateForm.title" variant="filled" size="small" class="w-full" placeholder="Task title"/>
                </div>

                <div class="flex items-center mt-4 gap-x-4 font-medium">
                    <DatePicker :minDate="minDate" v-model="taskUpdateForm.deadline" showIcon fluid iconDisplay="input" placeholder="Task deadline" variant="filled" class="basis-1/2">
                        <template #inputicon="slotProps">
                            <i class="pi pi-calendar" @click="slotProps.clickCallback" />
                        </template>
                    </DatePicker>
                    <Select showClear v-model="taskUpdateForm.task_group_id" :options="groups" optionLabel="title" filter placeholder="Select a group" class="w-full basis-1/2" variant="filled">
                        <template #value="slotProps">
                            <div v-if="slotProps.value" class="flex items-center text-gray-800">
                                <!-- <div>{{ slotProps.value.title }}</div> -->
                                <div>{{ taskUpdateForm.task_group_id.title }}</div>
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
                <Button label="Update" icon="save" @click="updateTask"/>
            </template>
        </Dialog>
    </div>
    
</template>

<style scoped>

</style>