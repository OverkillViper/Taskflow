<script setup>
import { Link } from '@inertiajs/vue3';
import DeleteGroupDialog from '@/Pages/Groups/DeleteGroupDialog.vue';

const props = defineProps({
    group : Object
})

</script>

<template>
    <div  class="flex items-center bg-white shadow-sm border p-2 rounded-xl">
        <div class="w-2 h-12 select-none rounded-md" :style="{ backgroundColor: '#' + group.color }">&nbsp</div>
        <Link href="#" class="ms-4 flex-grow">
            <div class="font-semibold text-lg">{{ group.title }}</div>
            <div class="text-sm">{{ group.tasks_count }} Tasks</div>
        </Link>
        <div>
            <DeleteGroupDialog iconOnly :group="group"/>
        </div>
    </div>
</template>