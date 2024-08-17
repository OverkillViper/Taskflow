<script setup>
import { ref, computed } from 'vue';
import { startOfMonth, endOfMonth, getDay, addDays, format, isToday as isDateToday } from 'date-fns';

// Current Date
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

// Days of the Week
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const props = defineProps({
    tasks : Array
})

// Calculate the first and last day of the current month
const firstDayOfMonth = startOfMonth(today);
const lastDayOfMonth = endOfMonth(today);

// Compute days in the month with deadlines
const daysInMonth = computed(() => {
    const days = [];
    let day = firstDayOfMonth;
    while (day <= lastDayOfMonth) {
        const formattedDate = format(day, 'yyyy-MM-dd');
        const hasDeadline = props.tasks.some((task) => task.deadline === formattedDate);
        days.push({
            day: day.getDate(),
            date: formattedDate,
            hasDeadline,
        });
        day = addDays(day, 1);
    }
    return days;
});

// Compute blank days to offset the first day of the month
const blankDays = computed(() => {
    const firstDayIndex = getDay(firstDayOfMonth);
    return Array(firstDayIndex).fill(null);
});

const isToday = (date) => isDateToday(new Date(date));

// Month Name
const monthName = format(today, 'MMMM');
</script>

<template>
    <div class="bg-white p-5 rounded-xl shadow-sm border select-none text-sm flex flex-col justify-between">
        <div class="flex justify-between mb-3">
            <div class="text-lg font-semibold">This Month's Schedule</div>
            <div class="font-medium text-end">
                <div>{{ currentYear }}</div>
                <div class="text-xl -mt-1">{{ monthName }}</div>
            </div>
        </div>
        <div class="grid grid-cols-7 gap-2">
            <div v-for="day in daysOfWeek" :key="day" class="w-8 2xl:w-10 h-8 2xl:h-10 flex items-center justify-center mx-auto font-semibold uppercase">
                {{ day }}
            </div>
            <div v-for="day in blankDays" :key="'blank-' + day" class="w-8 2xl:w-10 h-8 2xl:h-10 mx-auto"></div>
            <div 
                v-for="day in daysInMonth" :key="day.date"
                class="mx-auto w-8 2xl:w-10 h-8 2xl:h-10 flex items-center justify-center transition rounded-xl 2xl:rounded-2xl border font-medium"
                :class="[day.hasDeadline ? 'border-accent' : 'border-transparent', isToday(day.date) ? 'bg-purple-800 hover:bg-accent text-white' : 'bg-gray-50 hover:bg-gray-200']">
                <span>{{ day.day }}</span>
            </div>
        </div>
        <div class="flex p-3 mt-4 items-center gap-x-2">
            <span class="w-4 h-4 rounded-md border border-accent">&nbsp</span>
            <div class="text-sm font-medium">Date has deadline</div>
            <span class="w-4 h-4 rounded-md bg-purple-800 ms-4">&nbsp</span>
            <div class="text-sm font-medium">Today</div>
        </div>
    </div>
</template>

<style scoped>

</style>