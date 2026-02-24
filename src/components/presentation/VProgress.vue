<template>
    <div class="absolute right-4 h-[100vh] top-0 flex items-center">
        <div class="absolute z-2 right-0 transition-all" :style="styleTopHeight">
            <Points />
        </div>
        <div class="h-[50vh] rotate-180">
            <UProgress orientation="vertical" :modelValue="value" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Points from './Points.vue';


const { value } = defineProps<{ value: number }>(); 

const styleTopHeight = computed(() => {
    const percentageBar = 100 - value;

    return `top: ${Math.floor(25 + (percentageBar / 2))}%`;
});
</script>
