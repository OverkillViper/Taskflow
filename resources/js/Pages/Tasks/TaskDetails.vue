<script setup>
import CoreLayout from '@/Layouts/CoreLayout.vue';
import Button from '@/Components/TaskflowComponents/Button.vue';
import InputText from 'primevue/inputtext';
import { parseISO, differenceInDays } from 'date-fns';
import { computed } from "vue";
import { Link, useForm } from '@inertiajs/vue3';
import SubTaskCard from './SubTaskCard.vue';
import NoRecordMessage from '@/Pages/Dashboard/NoRecordMessage.vue';

const props = defineProps({
    task : Object
});

const daysRemaining = computed(() => {
    const now = new Date();
    const deadline = parseISO(props.task.deadline);
    const diffInDays = differenceInDays(deadline, now);

    // Round up the number of days
    const roundedDays = Math.ceil(diffInDays);

    if (roundedDays > 0) {
        return `${roundedDays} day${roundedDays > 1 ? 's' : ''} remaining`;
    } else if (roundedDays === 0) {
        return 'Deadline tomorrow';
    } else {
        return `${Math.abs(roundedDays)} day${Math.abs(roundedDays) > 1 ? 's' : ''} overdue`;
    }
});

const createSubTaskForm = useForm({
    'title'     : '',
    'task_id'   : props.task.id,
})

const createNewSubTask = () => {
    createSubTaskForm.post(route('subtasks.store'), {
        onFinish: () => {
            createSubTaskForm.title = '';
        },
    });
}

</script>

<template>
<CoreLayout title="Task Details">
    <div class="w-2/3 mx-auto mt-6">
        <div class="flex items-center gap-x-4">
            <div class="text-xl 2xl:text-2xl font-semibold flex-grow">
                {{ task.title }}
            </div>
            <Button label="Edit" icon="pencil"/>
            <Button label="Delete" icon="trash"/>
        </div>

        <div class="my-6 w-40 select-none">
            <span class="flex items-center bg-green-500 border border-green-700 rounded-lg px-4 py-2 font-semibold text-white" v-if="task.completed">
                <i class="pi pi-check-circle me-4" style="font-size: 0.8rem"></i>
                <div>Completed</div>
            </span>
            <span class="flex items-center bg-gray-500 border border-gray-700 rounded-lg px-4 py-2 font-semibold text-white" v-else>
                <i class="pi pi-hourglass me-4" style="font-size: 0.8rem"></i>
                <div>Pending</div>
            </span>
        </div>
        
        <div class="flex mt-8 justify-between items-end">
            <div>
                <div class="flex items-center" v-if="task.task_group_id">
                    <span class="w-7 h-7 flex justify-center items-center text-sm font-semibold text-white rounded-lg" :style="{ backgroundColor: '#' + task.task_group.color }">
                        {{ task.task_group.title[0] }}
                    </span>
                    <span class="text-sm text-gray-600 ms-2 font-medium">
                        {{ task.task_group.title }}
                    </span>
                </div>
        
                <div class="flex items-center" v-else>
                    <span class="w-7 h-7 flex justify-center items-center text-sm font-semibold text-white rounded-lg bg-gray-700">
                        U
                    </span>
                    <span class="text-sm text-gray-600 ms-2 font-medium">
                        Ungrouped
                    </span>
                </div>
                <div class="flex mt-4">
                    <span class="w-7 h-7 flex justify-center items-center text-sm font-semibold text-gray-700 rounded-lg bg-gray-200">
                        <i class="pi pi-calendar" style="font-size: 0.8rem"></i>
                    </span>
                    <div class="ms-2 text-sm">
                        <div class="text-gray-600 font-semibold uppercase">Deadline</div>
                        <div class="font-medium">{{ task.deadline }} ({{ daysRemaining }})</div>
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

        <form class="flex items-center text-sm gap-x-4" @submit.prevent="createNewSubTask">
            <div class="flex-grow font-semibold">Subordinate tasks</div>
            <InputText v-model="createSubTaskForm.title" size="small" variant="filled" placeholder="New subtask title"/>
            <Button label="Add" icon="plus" type="submit"/>
        </form>

        <div class="mt-6" v-if="task.sub_tasks.length != 0">
            <SubTaskCard v-for="subtask in task.sub_tasks" :key="subtask.id" :subtask="subtask"/>
        </div>
        <div class="mt-6" v-else>
            <NoRecordMessage />
        </div>
    </div>
    
</CoreLayout>
</template>