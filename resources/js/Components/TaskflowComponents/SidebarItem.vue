<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    icon    : String,
    label   : String,
    href    : String
});

</script>

<template>
    <!-- <Link :href="route(href)" class="flex items-center px-4 py-2 text-gray-500 hover:text-gray-800 transition  my-1 2xl:my-2">
        <i class="pi" :class="'pi-' + icon" style="font-size: 1rem"></i>
        <div class="font-semibold ms-4">
            {{ label }}
        </div>
    </Link> -->
    <Link 
        :href="route(href)"
        class="flex flex-col items-center justify-center bg-gray-50 border  py-3 rounded-xl w-16 h-16 hover:bg-gray-100 hover:border-gray-500 transition"
        v-tooltip.bottom="label"
    >
        <i class="pi" :class="'pi-' + icon" style="font-size: 1.2rem"></i>
        <!-- <div class="font-semibold mt-2 text-sm">
            {{ label }}
        </div> -->
    </Link>
</template>