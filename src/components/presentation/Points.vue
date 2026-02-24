<template>
    <UBadge icon="i-lucide-sun" class="whitespace-nowrap font-bold rounded-full text-white align-bottom">
        <span :class="`${smaller ? 'hidden sm:inline' : 'visible'}`">Points soleil</span>
        {{ smaller ? '' : '' }}
    </UBadge>
</template>

<script setup lang="ts">
const { smaller } = defineProps<{
    smaller?: boolean;
}>();

</script>


