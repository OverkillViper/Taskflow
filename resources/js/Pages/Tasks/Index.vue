<script setup>
import CoreLayout from '@/Layouts/CoreLayout.vue';
import NoRecordMessage from '@/Pages/Dashboard/NoRecordMessage.vue';
import TaskCard from './TaskCard.vue';
import Paginator from 'primevue/paginator';
import { useForm } from '@inertiajs/vue3';

const props = defineProps({
    tasks : Object,
    filter : String
})

const paginationForm = useForm({
    page    : 1,
    filter  : props.filter
})

function onPageChange(event) {
    paginationForm.page = event.page + 1;
    paginationForm.get(route('tasks.index'), {
        preserveScroll: true,
        preserveState: true,
    });
}

</script>

<template>
<CoreLayout :title="props.filter != null ? props.filter + ' Tasks' : 'All Tasks'">
    <div class="w-2/3 mx-auto mt-10">
        <div v-if="tasks.total != 0" class="mt-6">
            <TaskCard v-for="task in tasks.data" :key="task.id" :task="task" :show-status="props.filter == null" :taskGroup="task.task_group"/>
            <Paginator 
                :rows="tasks.per_page" 
                :totalRecords="tasks.total"
                @page="onPageChange"
                template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            />
        </div>
        <div v-else>
            <NoRecordMessage />
        </div>
    </div>
</CoreLayout>
</template>