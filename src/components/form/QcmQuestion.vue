<template>
    <div class="flex flex-col gap-8 w-150 max-w-full">
        <span class="mt-8 text-lg block">{{ question?.title }}</span>
        <URadioGroup v-model="selectedValue" color="primary" variant="table" indicator="end" :items="items" />
        <div class="flex justify-end">
            <UButton class="text-white" trailing-icon="i-lucide-chevron-right" @click="next" :disabled="!selectedValue">Suivant</UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Question } from '@/assets/questions';
import { computed, nextTick, ref, type Ref } from 'vue';


const selectedValue: Ref<number> = ref(0);

const { question } = defineProps<{
    question: Question;
}>();

const emit = defineEmits<{
    (e: 'next', value: number ): void,
}>();

const items = computed(() => {
    if (!question) {
        return [];
    }

    return question.answers.map(a => ({
        label: a.title,
        value: a.points,
    }));
});

const next = async () => {
    emit('next', selectedValue.value);
    await nextTick();
    selectedValue.value = 0;
};

</script>
