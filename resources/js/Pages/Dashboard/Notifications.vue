<script setup>
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';

</script>

<template>
    <div class="hover:bg-gray-200 w-8 h-8 rounded-md flex items-center justify-center transition">
        <OverlayBadge severity="danger">
            <i class="pi pi-bell" style="font-size: 1rem" />
        </OverlayBadge>
    </div>
    
</template>