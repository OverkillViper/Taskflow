<script setup>
import CoreLayout from '@/Layouts/CoreLayout.vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import TaskCard from '../Tasks/TaskCard.vue';
import GroupCard from '../Groups/GroupCard.vue';
import TagCard from '../Tags/TagCard.vue';
import NoRecordMessage from './NoRecordMessage.vue';
import Badge from 'primevue/badge';

const props = defineProps({
    tasks   : Object,
    groups  : Array,
    tags    : Array,
})

</script>

<template>
<CoreLayout title="Search Results">
    <div class="w-2/3 mx-auto">
        <Tabs value="0">
            <TabList class="mx-auto bg-gray-50">
                <Tab value="0" as="div" class="font-semibold">Tasks <Badge severity="contrast" v-if="tasks.total" :value="tasks.total" class="ms-2"/></Tab>
                <Tab value="1" as="div" class="font-semibold">Groups <Badge severity="contrast" v-if="groups.length" :value="groups.length" class="ms-2"/></Tab>
                <Tab value="2" as="div" class="font-semibold">Tags <Badge severity="contrast" v-if="tags.length" :value="tags.length" class="ms-2"/></Tab>
            </TabList>
            <TabPanels class="mt-6">
                <TabPanel value="0">
                    <div v-if="tasks.total">
                        <TaskCard v-for="task in tasks.data" :key="task.id" :task="task" show-status :taskGroup="task.task_group"/>
                    </div>
                    <NoRecordMessage v-else/>
                    
                </TabPanel>
                <TabPanel value="1">
                    <div v-if="groups.length" class="grid grid-cols-2 2xl:grid-cols-3 gap-6">
                        <GroupCard v-for="group in groups" :key="group.id" :group="group"/>
                    </div>
                    <NoRecordMessage v-else/>
                </TabPanel>
                <TabPanel value="2">
                    <div v-if="tags.length" class="grid grid-cols-4 gap-4">
                        <TagCard v-for="tag in tags" :key="tag.id" :tag="tag"/>
                    </div>
                    <NoRecordMessage v-else/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</CoreLayout>
</template>