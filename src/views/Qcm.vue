<template>
    <div class="flex justify-between">
        <span>QCM</span>
        <span>{{ indexQuestion + 1 }}/{{ maxQuestion }}</span>
    </div>
    <USeparator color="primary" />
    <QcmQuestion v-if="currentQuestion" :question="currentQuestion" @next="validateQuestion" />

    <VProgress :value="percentage" />
</template>

<script setup lang="ts">
import { questions } from '@/assets/questions';
import VProgress from '@/components/presentation/VProgress.vue';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nbPoints = ref(0);
const maxPoints = computed(() => {
    let points = 0;

    for (let question of questions) {
        const pointsForThis = question.answers.map(a => a.points);
        const max = Math.max(...pointsForThis);
        points += max;
    }

    return points;
});

const percentage = computed(() => {
    return (nbPoints.value / maxPoints.value) * 100;
});

const indexQuestion = ref(0);
const maxQuestion = computed(() => questions.length);

const currentQuestion = computed(() => {
    return questions[indexQuestion.value];
});

const validateQuestion = (points: number) => {
    nbPoints.value += points;
    
    if (indexQuestion.value < maxQuestion.value - 1) {
        setTimeout(() => {
            indexQuestion.value += 1;
        }, Math.random() * 1500);
            
    }

    if (indexQuestion.value >= maxQuestion.value - 1) {
        setTimeout(() => {
            router.push(`/interactive?points=${nbPoints.value}`);
        }, 2000);
    }
};
</script>
