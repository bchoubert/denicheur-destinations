<template>
    <div class="h-[90%] flex flex-col items-center gap-8">
        <div class="flex flex-row gap-8">
            <Logo />

            <i class="flex-[1px] block h-[150px] w-[1px] bg-gray-500" />

            <h1 class="text-7xl">Dénicheur de <br/>destinations</h1>
        </div>

        <p>
            Cette solution logicielle avancée vous permet de trouver la destination idéale selon vos critères.<br/>
            Plusieurs questions vous seront posées, veuillez y répondre le plus justement possible.<br />
            À la fin de votre test, une destination qui prendra en compte toutes vos réponses sera calculée.
        </p>

        <UButton class="text-white" trailing-icon="i-lucide-chevron-right" @click="openStart">Démarrer</UButton>
    </div>
</template>

<script setup lang="ts">
import Logo from '@/components/presentation/Logo.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const openStart = () => {
    router.push('/start');
};
</script>
