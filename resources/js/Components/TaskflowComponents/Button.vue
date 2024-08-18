<script setup>

const props = defineProps ({
    icon        : String,
    label       : String,
    compact     : Boolean,
    type        : String,
    outline     : Boolean,
})

</script>

<template>
    <button :type="type" class="rounded-lg transition-all flex items-center justify-center" :class="[compact ? 'px-2 py-1' : 'px-4 py-2', outline ? 'border border-gray-700 hover:bg-gray-100' : 'bg-gray-700 hover:opacity-85 ', icon ? 'gap-x-2' : '']">
        <i class="pi" :class="['pi-' + icon, outline ? 'text-gray-700' : 'text-white']" style="font-size: 0.7rem"></i>
        <div class="uppercase font-semibold" :class="[compact ? 'text-xs' : 'text-sm', outline ? 'text-gray-700' : 'text-white']">
            {{ label }}
        </div>
    </button>
</template>