<script setup>

import { Link } from '@inertiajs/vue3';

const props = defineProps({
    tag : Object,
    compact : Boolean
});

</script>

<template>
    <div class="bg-gray-600 flex items-center justify-between text-white text-sm rounded-md overflow-hidden" :class="compact ? 'font-medium' : 'font-semibold'">
        <Link href="#" :class="compact ? 'px-2 py-1' : 'px-4 py-2'">{{ tag.name }}</Link>
        <Link :href="route('tags.destroy', tag.id)" class="flex justify-center items-center hover:bg-gray-700 transition" :class="compact ? 'w-6 h-6' : 'w-10 h-10'" as="button" method="delete">
            <span class="pi pi-trash" style="font-size: .7rem;"></span>
        </Link>
    </div>
</template>