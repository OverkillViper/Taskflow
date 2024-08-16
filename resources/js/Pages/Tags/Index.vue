<script setup>
import CoreLayout from '@/Layouts/CoreLayout.vue';
import NoRecordMessage from '@/Pages/Dashboard/NoRecordMessage.vue';
import TagCard from './TagCard.vue';

const props = defineProps({
    tags : Array,
})

</script>

<template>
<CoreLayout title="Tags">
    <div class="w-2/3 mx-auto mt-10">
        <div v-if="tags.length != 0" class="mt-6 grid grid-cols-4 gap-x-4">
            <TagCard v-for="tag in tags" :key="tag.id" :tag="tag"/>
            <!-- <GroupCard v-for="group in groups" :key="group.id" :group="group"/> -->
        </div>
        <div v-else>
            <NoRecordMessage />
        </div>
    </div>
</CoreLayout>
</template>