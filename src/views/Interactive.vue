<template>
    <h1 class="text-2xl">Vous avez {{ points }} sur {{ maxPoints }} <Points />!</h1>

    <p class="mt-4 mb-16">Nous avons remarqué que vous aimez beaucoup le soleil. Est-ce vrai ?</p>

    <div class="flex gap-4">
        <div ref="btn1" class="inline" :style="style1">
            <UButton icon="i-lucide-check" class="bg-green-600">Oui</UButton>
        </div>
        <div ref="btn2" class="inline" :style="style2">
            <UButton icon="i-lucide-x" class="bg-red-600">Non</UButton>
        </div>
    </div>

    <button class="absolute bottom-0 right-0" @click="passToProgress">Passer</button>
</template>

<script setup lang="ts">
import { questions } from '@/assets/questions';
import Points from '@/components/presentation/Points.vue';
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const points = route.query.points || 0;

const maxPoints = computed(() => {
    let points = 0;

    for (let question of questions) {
        const pointsForThis = question.answers.map(a => a.points);
        const max = Math.max(...pointsForThis);
        points += max;
    }

    return points;
});

const passToProgress = () => {
    router.push('/progress');
};

// Fleeing buttons
const btn1 = ref(null)
const btn2 = ref(null)

const style1 = reactive({ transform: 'translate(0px, 0px)' })
const style2 = reactive({ transform: 'translate(0px, 0px)' })

const threshold = 120 // distance en px pour déclencher la fuite
const escapeDistance = 150

const handleMouseMove = (e: any) => {
  fleeIfClose(btn1.value, style1, e)
  fleeIfClose(btn2.value, style2, e)
};

const fleeIfClose = (el: any, style: any, e: any) => {
  if (!el) {
    console.error('Element is empty!');
    return;
  }

  const rect = el.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const dx = e.clientX - centerX
  const dy = e.clientY - centerY
  const distance = Math.sqrt(dx * dx + dy * dy)

  if (distance < threshold) {
    const angle = Math.atan2(dy, dx)
    const moveX = -Math.cos(angle) * escapeDistance
    const moveY = -Math.sin(angle) * escapeDistance

    style.transform = `translate(${moveX}px, ${moveY}px)`
  }
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
});

</script>
