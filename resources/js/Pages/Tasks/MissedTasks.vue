<script setup>
import CoreLayout from '@/Layouts/CoreLayout.vue';
import NoRecordMessage from '@/Pages/Dashboard/NoRecordMessage.vue';
import TaskCard from './TaskCard.vue';

const props = defineProps({
    tasks : Array,
})

</script>

<template>
<CoreLayout title="Missed Tasks">
    <div class="w-2/3 mx-auto mt-10">
        <div v-if="tasks.length != 0" class="mt-6">
            <!-- <GroupCard v-for="group in groups" :key="group.id" :group="group"/> -->
            <TaskCard v-for="task in tasks" :key="task.id" :task="task" show-status :taskGroup="task.task_group"/>
        </div>
        <div v-else>
            <NoRecordMessage />
        </div>
    </div>
</CoreLayout>
</template>