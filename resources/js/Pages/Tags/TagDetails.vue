<script setup>
import CoreLayout from '@/Layouts/CoreLayout.vue';
import TaskCard from '../Tasks/TaskCard.vue';
import NoRecordMessage from '../Dashboard/NoRecordMessage.vue';
import Divider from 'primevue/divider';

const props = defineProps({
    tag   : Object,
    tasks : Array
})

</script>

<template>
<CoreLayout title="Group Details">
    <div class="w-2/3 mx-auto mt-10">

        <div class="flex justify-between">
            <div>
                <div class="text-xl font-semibold">{{ tag.name }}</div>
                <div class="flex items-center mt-2">
                    <span class="select-none w-8 h-8 rounded-xl flex justify-center items-center text-white font-semibold bg-gray-700">
                        {{ tasks.total }}
                    </span>
                    <div class="font-medium ms-2 uppercase text-sm select-none">Tasks in tag</div>
                </div>
            </div>
        </div>

        <Divider align="center">
            <div class="font-semibold uppercase text-sm">Tasks</div>
        </Divider>

        <div v-if="tasks.total">
            <TaskCard v-for="task in tasks.data" :key="task.id" :task="task" show-status/>
        </div>
        <div v-else>
            <NoRecordMessage />
        </div>

    </div>
</CoreLayout>
</template>