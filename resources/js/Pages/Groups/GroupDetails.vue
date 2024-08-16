<script setup>
import CoreLayout from '@/Layouts/CoreLayout.vue';
import EditGroupDialog from './EditGroupDialog.vue';
import DeleteGroupDialog from './DeleteGroupDialog.vue';
import TaskCard from '../Tasks/TaskCard.vue';
import NoRecordMessage from '../Dashboard/NoRecordMessage.vue';
import Divider from 'primevue/divider';

const props = defineProps({
    group : Object,
    tasks : Array
})

</script>

<template>
<CoreLayout title="Group Details">
    <div class="w-2/3 mx-auto mt-10">

        <div class="flex justify-between">
            <div>
                <div class="text-xl font-semibold">{{ group.title }}</div>
                <div class="flex items-center mt-2">
                    <span class="select-none w-8 h-8 rounded-xl flex justify-center items-center text-white font-semibold" :style="{ backgroundColor: '#' + group.color }">
                        {{ tasks.length }}
                    </span>
                    <div class="font-medium ms-2 uppercase text-sm select-none">Tasks in group</div>
                </div>
            </div>
            <div class="flex gap-x-4">
                <EditGroupDialog    :group="group"/>
                <DeleteGroupDialog  :group="group"/>
            </div>
        </div>

        <Divider align="center">
            <div class="font-semibold uppercase text-sm">Tasks</div>
        </Divider>

        <div v-if="tasks.length">
            <TaskCard v-for="task in tasks" :key="task.id" :task="task" show-status/>
        </div>
        <div v-else>
            <NoRecordMessage />
        </div>

    </div>
</CoreLayout>
</template>