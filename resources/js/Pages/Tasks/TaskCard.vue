<script setup>
import { Link } from '@inertiajs/vue3';
import MeterGroup from 'primevue/metergroup';
import { ref, computed, watch } from "vue";
import { parseISO, differenceInDays } from 'date-fns';

const props = defineProps({
    task : Object,
    showStatus : Boolean,
    taskGroup : Object
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

const meterValue = computed(() => {
    const taskCompleted = (props.task.completed_subtasks_count * 100) / props.task.sub_tasks_count || 0;
    return [{ label: 'Task completed', value: taskCompleted, color: '#252525' }];
});

</script>

<template>
    <Link :href="route('tasks.show', task.id)" class="flex p-5 rounded-2xl shadow-sm border my-4 bg-white hover:shadow-md transition-all hover:border-gray-400 cursor-default select-none ease-out">
        <div class="flex-grow">
            <div class="flex items-center justify-between">
                <div class="flex items-center" v-if="taskGroup">
                    <span class="w-7 h-7 flex justify-center items-center text-sm font-semibold text-white rounded-lg" :style="{ backgroundColor: '#' + taskGroup.color }">
                        {{ taskGroup.title[0] }}
                    </span>
                    <span class="text-sm text-gray-600 ms-2 font-medium">
                        {{ taskGroup.title }}
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
            </div>
            
    
            <div class="text-lg font-semibold capitalize mt-3">
                {{ task.title }}
            </div>
            
            <div class="w-1/2">
                <MeterGroup :value="meterValue" v-if="task.sub_tasks_count" class="mt-2"/>
                <div class="text-sm text-gray-600" v-else>This task has no subordinate tasks</div>
            </div>
        </div>
        <div class="flex flex-col items-end">
            <div class="text-sm font-medium text-gray-600">
                {{ daysRemaining }}
            </div>
            <div class="flex-grow flex items-end" v-if="showStatus">
                <div class="rounded-lg border w-10 h-10 flex items-center justify-center" :class="task.completed ? 'border-green-700 bg-green-300' : ( task.missed ? 'border-red-600 bg-red-500' : 'border-gray-600 bg-gray-500')">
                    <i class="pi" :class="task.completed ? 'pi-check-circle text-green-700' : ( task.missed ? 'pi-times-circle text-white' : 'pi-hourglass text-white')"></i>
                </div>
            </div>
            
        </div>
    </Link>
</template>

<style scoped>

</style>