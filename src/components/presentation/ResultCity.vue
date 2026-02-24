<template>
    <div class="flex flex-row">
        <div class="flex-1 p-8">
            <span class="block text-4xl">{{ city.dates }}</span>
            <span>{{ city.city }}</span>
        </div>
        <div class="py-8 flex-4 flex flex-row gap-4">
            <div
                v-for="photo of city.photos"
                :key="photo.label"
                class="flex-1 flex flex-col gap-2"
            >
                <img
                    class="h-30 w-full object-cover rounded-md"
                    :src="photo.img"
                />
                <span>{{ photo.label }}</span>
            </div>
        </div>
    </div>
    <USeparator />
</template>

<script setup lang="ts">
import type { ResultItem } from '@/assets/result';


defineProps<{ city: ResultItem }>();
</script>
