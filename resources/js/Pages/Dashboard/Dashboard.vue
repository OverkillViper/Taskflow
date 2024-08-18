<script setup>
import CoreLayout from '@/Layouts/CoreLayout.vue';
import Calendar from './Calendar.vue';
import TaskCard from '../Tasks/TaskCard.vue';
import { Link } from '@inertiajs/vue3';
import NoRecordMessage from './NoRecordMessage.vue';

const props = defineProps({
    tasks           : Array,
    totalTasks      : Number,
    pendingTasks    : Number,
    completedTasks  : Number,
    missedTasks     : Number,
})

</script>

<template>
<CoreLayout title="Dashboard">
    <div class="flex gap-6 py-6 px-10">
        <div class="basis-3/5">
            <div class="flex items-center justify-between">
                <div class="text-lg font-semibold">Task at hand</div>
                <Link :href="route('tasks.index')" class="text-sm font-medium text-gray-500 hover:text-gray-700 transition">View All</Link>
            </div>
            <div v-if="tasks.length">
                <TaskCard v-for="task in tasks" :key="task.id" :task="task" show-status :taskGroup="task.task_group"/>
            </div>
            <NoRecordMessage v-else/>
        </div>
        <div class="basis-2/5 pb-4">
            <Calendar :tasks="tasks" class="h-full"/>
        </div>
    </div>

    <div class="flex flex-col justify-center items-center">
        <div class="uppercase font-semibold">Stats</div>
        <div class="grid grid-cols-4 w-2/3 2xl:w-1/3 mt-4">
            <div class="text-center text-4xl">{{ totalTasks > 9 ? '' : '0' }}{{ totalTasks }}</div>
            <div class="text-center text-4xl">{{ pendingTasks > 9 ? '' : '0' }}{{ pendingTasks }}</div>
            <div class="text-center text-4xl">{{ completedTasks > 9 ? '' : '0' }}{{ completedTasks }}</div>
            <div class="text-center text-4xl">{{ missedTasks > 9 ? '' : '0' }}{{ missedTasks }}</div>
            <div class="text-center text-sm font-medium uppercase">Total Tasks</div>
            <div class="text-center text-sm font-medium uppercase">Pending Tasks</div>
            <div class="text-center text-sm font-medium uppercase">Completed Tasks</div>
            <div class="text-center text-sm font-medium uppercase">Missed Tasks</div>
        </div>
    </div>
</CoreLayout>
</template>