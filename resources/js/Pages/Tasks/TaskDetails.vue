<script setup>
import CoreLayout from '@/Layouts/CoreLayout.vue';
import Button from '@/Components/TaskflowComponents/Button.vue';
import InputText from 'primevue/inputtext';
import { parseISO, differenceInDays } from 'date-fns';
import { computed, ref } from "vue";
import { Link, useForm } from '@inertiajs/vue3';
import SubTaskCard from './SubTaskCard.vue';
import NoRecordMessage from '@/Pages/Dashboard/NoRecordMessage.vue';
import MeterGroup from 'primevue/metergroup';
import EditTaskDialog from './EditTaskDialog.vue';
import DeleteTaskDialog from './DeleteTaskDialog.vue';
import MultiSelect from 'primevue/multiselect';
import TaskTagCard from '../Tags/TaskTagCard.vue';

const props = defineProps({
    task     : Object,
    tags     : Array,
    taskTags : Array,
});

const daysRemainingLabel = ref('');

const daysRemaining = computed(() => {
    const now = new Date();
    const deadline = parseISO(props.task.deadline);
    const diffInDays = differenceInDays(deadline, now);

    // Round up the number of days
    const roundedDays = Math.ceil(diffInDays);

    if (roundedDays > 0) {
        daysRemainingLabel.value = `Day${roundedDays > 1 ? 's' : ''} remaining`;
        return roundedDays > 9 ? roundedDays : `0${roundedDays}`;
    } else if (roundedDays === 0) {
        daysRemainingLabel.value = 'Day remaining'
    } else {
        daysRemainingLabel.value = `Day${roundedDays > 1 ? 's' : ''} overdue`;
        return roundedDays > 9 ? Math.abs(roundedDays) : `0${Math.abs(roundedDays)}`;
    }
});

const meterValue = computed(() => {
    const taskCompleted = (props.task.completed_subtasks_count * 100) / props.task.sub_tasks_count || 0;
    return [{ label: 'Task completed', value: taskCompleted, color: '#252525' }];
});

const createSubTaskForm = useForm({
    'title'     : '',
    'task_id'   : props.task.id,
});

const taskTagsForm = useForm({
    tags : []
})

const createNewSubTask = () => {
    createSubTaskForm.post(route('subtasks.store'), {
        onFinish: () => {
            createSubTaskForm.title = '';
        },
    });
}

const addTags = () => {
    taskTagsForm.post(route('tasks.tag.add', props.task.id), {
        onFinish: () => {
            taskTagsForm.tags = [];
        },
    })
}

</script>

<template>
<CoreLayout title="Task Details">
    <div class="w-2/3 mx-auto mt-6">
        <div class="flex items-center gap-x-4">
            <div class="text-xl 2xl:text-2xl font-semibold flex-grow">
                {{ task.title }}
            </div>
            <EditTaskDialog :task="task"/>
            <DeleteTaskDialog :task="task"/>
        </div>

        <div class="my-6 w-40 select-none">
            <span class="flex items-center bg-green-500 border border-green-700 rounded-lg px-4 py-2 font-semibold text-white" v-if="task.completed">
                <i class="pi pi-check-circle me-4" style="font-size: 0.8rem"></i>
                <div>Completed</div>
            </span>
            <span class="flex items-center bg-red-600 border border-red-700 rounded-lg px-4 py-2 font-semibold text-white" v-else-if="task.missed">
                <i class="pi pi-hourglass me-4" style="font-size: 0.8rem"></i>
                <div>Missed</div>
            </span>
            <span class="flex items-center bg-gray-500 border border-gray-700 rounded-lg px-4 py-2 font-semibold text-white" v-else>
                <i class="pi pi-hourglass me-4" style="font-size: 0.8rem"></i>
                <div>Pending</div>
            </span>
        </div>
        
        <div class="flex mt-8 justify-between items-end">
            <div>
                <Link :href="route('groups.show', task.task_group.id)" class="flex items-center rounded-xl hover:bg-white border p-1 bg-gray-100 transition" v-if="task.task_group_id">
                    <span class="w-7 h-7 flex justify-center items-center text-sm font-semibold text-white rounded-lg" :style="{ backgroundColor: '#' + task.task_group.color }">
                        {{ task.task_group.title[0] }}
                    </span>
                    <span class="text-sm text-gray-600 mx-2 font-medium">
                        {{ task.task_group.title }}
                    </span>
                </Link>
        
                <div class="flex items-center" v-else>
                    <span class="w-7 h-7 flex justify-center items-center text-sm font-semibold text-white rounded-lg bg-gray-700">
                        U
                    </span>
                    <span class="text-sm text-gray-600 ms-2 font-medium">
                        Ungrouped
                    </span>
                </div>
                <div class="flex mt-4">
                    <span class="text-4xl">{{ daysRemaining }}</span>
                    <div class="ms-2 text-sm">
                        <div class="text-gray-600 font-semibold uppercase">{{ daysRemainingLabel }}</div>
                        <div class="font-medium">{{ task.deadline }}</div>
                    </div>
                </div>
            </div>
            <div>
                <Link :href="route('tasks.status.change', task.id)" method="put" as="button" class="select-none">
                    <Button :label="task.completed ? 'Mark pending' : 'Mark completed'" :icon="task.completed ? 'hourglass' : 'check-circle'" :class="task.completed ? 'bg-gray-500' : 'bg-green-500'"/>
                </Link>
            </div>
        </div>
        
        <hr class="my-6">

        <form @submit.prevent="addTags" class="flex items-center">
            <div class="text-sm uppercase font-semibold flex-grow">Tags</div>
            <MultiSelect class="text-sm w-1/2 me-2" :options="tags" v-model="taskTagsForm.tags" display="chip" optionLabel="name" filter placeholder="Add a tag"/>
            <Button icon="plus" label="add" type="submit"/>
        </form>

        <div class="flex items-center gap-4 mt-4">
            <TaskTagCard v-for="taskTag in taskTags" :key="taskTag.id" :taskTag="taskTag" compact/>
        </div>

        <hr class="my-6">

        <form class="flex items-center text-sm gap-x-4" @submit.prevent="createNewSubTask">
            <div class="flex-grow font-semibold">Subordinate tasks</div>
            <InputText v-model="createSubTaskForm.title" size="small" variant="filled" placeholder="New subtask title"/>
            <Button label="Add" icon="plus" type="submit"/>
        </form>

        <div v-if="task.sub_tasks.length != 0">
            <MeterGroup :value="meterValue" class="my-6"/>

            <SubTaskCard v-for="subtask in task.sub_tasks" :key="subtask.id" :subtask="subtask"/>
        </div>
        <div class="mt-6" v-else>
            <NoRecordMessage />
        </div>
    </div>
    
</CoreLayout>
</template>