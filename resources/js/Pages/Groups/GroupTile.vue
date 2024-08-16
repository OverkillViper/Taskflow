<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    group : Object
})

</script>

<template>
    <Link :href="route('groups.show', group.id)" class="rounded-xl p-4 border shadow-sm shadow-gray-200 flex items-center bg-gray-50 mb-2 hover:border-gray-400 transition ease-out">
        <div class="w-2 rounded-md select-none" style="background-color: blueviolet;">
            &nbsp
        </div>
        <div class="ms-4 font-semibold flex-grow text-sm">
            {{ group.title }}
        </div>
        <div class="bg-gray-300 rounded-xl w-8 h-8 flex items-center justify-center font-semibold">
            {{ group.tasks_count  }}
        </div>
    </Link>
</template>