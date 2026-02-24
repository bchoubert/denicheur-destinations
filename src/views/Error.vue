<template>
    <h1 class="text-5xl text-red-500 flex gap-2 mb-8">
        <UIcon name="i-lucide-triangle-alert" :class="`${(increment % 2 === 0) ? 'invisible' : 'visible'}`" />
        Erreur dans le calcul !
    </h1>
    <div class="flex flex-col gap-4 mt-4">
        <p v-if="increment > 2">Paramètre important non pris en compte.</p>
        <p v-if="increment > 4">Recalcul en cours...</p>
        <p v-if="increment > 8">Recalcul impossible ! Suppression des autres paramètres...</p>
        <p v-if="increment > 15" class="gap-2 text-primary text-4xl my-8">
            Seul paramètre important :
            <span :class="`inline ${(increment % 2 === 0) ? 'invisible' : 'visible'}`">Magie ! <UIcon class="inline" name="i-lucide-wand-sparkles" /></span>
        </p>
        <p v-if="increment > 20">
            <UButton trailing-icon="i-lucide-chevron-right" @click="passToResult">Résultat</UButton>
        </p>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';


const increment = ref(0);
const router = useRouter();

onMounted(() => {
    setInterval(() => {
        increment.value += 1;
    }, 1000);
});

const passToResult = () => {
    setTimeout(() => {

        router.push('/result');
    }, 500);
};

</script>
