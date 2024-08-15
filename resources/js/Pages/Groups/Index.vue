<script setup>
import CoreLayout from '@/Layouts/CoreLayout.vue';
import CreateGroupDialog from '@/Pages/Groups/CreateGroupDialog.vue';
import NoRecordMessage from '@/Pages/Dashboard/NoRecordMessage.vue';
import GroupCard from '@/Pages/Groups/GroupCard.vue';

const props = defineProps({
    groups : Array,
})

</script>

<template>
<CoreLayout title="Task Groups">
    <div class="w-2/3 mx-auto mt-10">
        <div class="flex justify-end">
            <CreateGroupDialog />
        </div>
        <div v-if="groups.length != 0" class="grid grid-cols-3 gap-6 mt-6">
            <GroupCard v-for="group in groups" :key="group.id" :group="group"/>
        </div>
        <div v-else>
            <NoRecordMessage />
        </div>
    </div>
</CoreLayout>
</template>