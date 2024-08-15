<script setup>
import Dialog from 'primevue/dialog';
import Button from '@/Components/TaskflowComponents/Button.vue';
import { ref } from "vue";
import InputText from 'primevue/inputtext';
import ColorPicker from 'primevue/colorpicker';
import { useForm, Link } from '@inertiajs/vue3';

const visible = ref(false);

const props = defineProps({
    iconOnly : Boolean,
    group    : Object,
})

</script>

<template>
    <div>
        <button v-if="iconOnly" class="bg-gray-50 hover:bg-gray-200 transition w-10 h-10 flex items-center justify-center rounded-full" @click="visible = true">
            <i class="pi pi-trash" style="font-size: 1rem"></i>
        </button>
        <!-- <Button label="Create new group" icon="plus" @click="visible = true" v-else /> -->

        <Dialog v-model:visible="visible" modal header="Delete group" :style="{ width: '35rem' }">
            <template #header>
                <div class="inline-flex items-center justify-center gap-2">
                    <div class="bg-gray-700 text-white w-8 h-8 rounded-xl flex items-center justify-center">
                        <i class="pi pi-trash" style="font-size: 0.8rem; "></i>
                    </div>
                    
                    <span class="font-semibold whitespace-nowrap">Delete Group</span>
                </div>
            </template>

            <div class="font-semibold">
                Are you sure you want to delete this group?
                <div class="flex">
                    <span class="font-semibold">Note:</span>
                    <div class="font-medium ms-2">Deleting this group will also delete all its tasks and sub tasks.</div>
                </div>
            </div>

            <template #footer>
                <Button label="Cancel" icon="times" outline text @click="visible = false"/>
                <Link :href="route('groups.destroy', group.id)" method="delete">
                    <Button label="Delete" icon="trash"/>
                </Link>
            </template>
        </Dialog>
    </div>
    
</template>