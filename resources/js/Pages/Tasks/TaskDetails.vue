<script setup>
import CoreLayout from '@/Layouts/CoreLayout.vue';

const props = defineProps({
    task : Object
})

</script>

<template>
<CoreLayout title="Task Details">
    <div class="w-2/3 mx-auto mt-6">
        <div class="flex items-center">
            <div class="text-2xl font-semibold">
                {{ task.title }}
            </div>
        </div>
        
    </div>
    
</CoreLayout>
</template>