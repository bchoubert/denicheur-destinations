<template>
    <div class="h-[90%] flex flex-col items-center gap-8">
        
        <p>
            Cette barre fait la somme de vos <Points />.<br /><br />
            Rappel: répondez le plus honnêtement possible!
        </p>

        <UButton class="text-white" trailing-icon="i-lucide-chevron-right" @click="openQcm">Continuer</UButton>
    </div>

    <UIcon name="i-lucide-arrow-right" class="sm:visible invisible text-orange-600 absolute top-[45%] right-10 text-6xl" />

    <VProgress :value="randomValue" />
</template>

<script setup lang="ts">
import Points from '@/components/presentation/Points.vue';
import VProgress from '@/components/presentation/VProgress.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const openQcm = () => {
    router.push('/qcm');
};

const randomValue = ref(0);

onMounted(() => {
    setInterval(() => {
        const rdm = Math.random() * 100;
        randomValue.value = rdm;
    }, 1500);
});
</script>
