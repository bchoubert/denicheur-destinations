<template>
    <div class="sm:flex sm:flex-row">
        <div class="sm:flex-1 p-8">
            <span class="block text-4xl">{{ city.dates }}</span>
            <span>{{ city.city }}</span>
        </div>
        <div class="py-8 sm:flex-4 sm:flex sm:flex-row gap-4">
            <div
                v-for="photo of city.photos"
                :key="photo.label"
                class="flex-1 flex flex-col gap-2"
            >
                <img
                    class="h-30 w-full object-cover rounded-md"
                    :src="`/denicheur-destinations/dist/${photo.img}`"
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
