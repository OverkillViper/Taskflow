<script setup>

import { Link } from '@inertiajs/vue3';

const props = defineProps({
    tag : Object
});

</script>

<template>
    <div class="bg-gray-600 flex items-center justify-between text-white text-sm rounded-md font-semibold overflow-hidden">
        <Link href="#" class="px-4 py-2">{{ tag.name }}</Link>
        <Link :href="route('tags.destroy', tag.id)" class="w-10 h-10 flex justify-center items-center hover:bg-gray-700 transition" as="button" method="delete">
            <span class="pi pi-trash" style="font-size: .7rem;"></span>
        </Link>
    </div>
</template>