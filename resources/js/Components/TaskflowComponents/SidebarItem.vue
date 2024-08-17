<script setup>
import { Link, useForm } from '@inertiajs/vue3';

const taskFilterForm = useForm({
    filter : ''
});

const props = defineProps({
    icon    : String,
    label   : String,
    href    : String,
    param   : String,
});

const visitTask = () => {
    taskFilterForm.filter = props.param;
    taskFilterForm.get(route(props.href));
}

</script>

<template>
    <!-- <Link :href="route(href)" class="flex items-center px-4 py-2 text-gray-500 hover:text-gray-800 transition  my-1 2xl:my-2">
        <i class="pi" :class="'pi-' + icon" style="font-size: 1rem"></i>
        <div class="font-semibold ms-4">
            {{ label }}
        </div>
    </Link> -->
    <div 
        class="flex flex-col items-center justify-center bg-gray-50 border rounded-lg 2xl:rounded-xl  w-12 h-12 2xl:w-16 2xl:h-16 hover:bg-gray-100 hover:border-gray-500 transition"
        v-tooltip.bottom="label"
        @click="visitTask"
    >
        <i class="pi" :class="'pi-' + icon" style="font-size: 1.2rem"></i>
        <!-- <div class="font-semibold mt-2 text-sm">
            {{ label }}
        </div> -->
    </div>
</template>