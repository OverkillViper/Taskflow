<script setup>
import Dialog from 'primevue/dialog';
import Button from '@/Components/TaskflowComponents/Button.vue';
import { ref } from "vue";
import { Link } from '@inertiajs/vue3';

const visible = ref(false);

const props = defineProps({
    task     : Object,
})

</script>

<template>
    <div>
        <!-- <Button label="Delete" icon="trash" @click="visible = true"/> -->
        <!-- <Button label="Create new group" icon="plus" @click="visible = true" v-else /> -->
        <button href="#" class="flex items-center hover:bg-gray-100 rounded-md transition p-2 w-full" @click="visible = true">
            <span class="pi pi-trash"></span>
            <div class="text-sm ms-2 font-medium">Delete</div>
        </button>

        <Dialog v-model:visible="visible" modal header="Delete task" :style="{ width: '35rem' }">
            <template #header>
                <div class="inline-flex items-center justify-center gap-2">
                    <div class="bg-gray-700 text-white w-8 h-8 rounded-xl flex items-center justify-center">
                        <i class="pi pi-trash" style="font-size: 0.8rem; "></i>
                    </div>
                    
                    <span class="font-semibold whitespace-nowrap">Delete Task</span>
                </div>
            </template>

            <div class="font-semibold">
                Are you sure you want to delete this task?
                <div class="flex">
                    <span class="font-semibold">Note:</span>
                    <div class="font-medium ms-2">Deleting this task will also delete all its subordinate tasks.</div>
                </div>
            </div>

            <template #footer>
                <Button label="Cancel" icon="times" outline text @click="visible = false"/>
                <Link :href="route('tasks.destroy', task.id)" method="delete" as="button">
                    <Button label="Delete" icon="trash"/>
                </Link>
            </template>
        </Dialog>
    </div>
    
</template>