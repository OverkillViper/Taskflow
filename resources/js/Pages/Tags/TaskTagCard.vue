<script setup>

import { Link } from '@inertiajs/vue3';

const props = defineProps({
    taskTag : Object,
    compact : Boolean
});

</script>

<template>
    <div class="bg-gray-600 flex items-center justify-between text-white rounded-md overflow-hidden" :class="compact ? 'font-medium text-xs' : 'font-semibold text-sm'">
        <Link :href="route('tags.show', taskTag.tag_id)" :class="compact ? 'px-2 py-1' : 'px-4 py-2'">{{ taskTag.tag.name }}</Link>
        <Link :href="route('tasks.tag.remove', taskTag.id)" class="flex justify-center items-center hover:bg-gray-700 transition" :class="compact ? 'w-6 h-6' : 'w-10 h-10'" as="button" method="delete">
            <span class="pi pi-times" style="font-size: .7rem;"></span>
        </Link>
    </div>
</template>