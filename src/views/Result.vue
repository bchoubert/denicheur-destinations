<template>
     <div class="snow">
      <span 
        v-for="flake in flakes" 
        :key="flake.id"
        class="flake"
        :style="flake.style"
      >
        ❄
      </span>
    </div>
    <div class="w-(--ui-container)">
        <ResultCity
            v-for="city of results"
            :key="city.city"

            :city="city"
        />
    </div>
</template>

<script setup lang="ts">
import { results } from '@/assets/result';
import ResultCity from '@/components/presentation/ResultCity.vue';
import { onMounted, ref } from 'vue';

interface Flake {
  id: number
  style: Record<string, string>
}

const flakes = ref<Flake[]>([])


function createFlakes(count: number) {
  const newFlakes: Flake[] = []

  for (let i = 0; i < count; i++) {
    const size = Math.random() * 10 + 10
    const left = Math.random() * 100
    const duration = Math.random() * 5 + 5
    const delay = Math.random() * 5

    newFlakes.push({
      id: i,
      style: {
        left: `${left}vw`,
        fontSize: `${size}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
      }
    })
  }

  flakes.value = newFlakes
}

onMounted(() => {
  createFlakes(50)
})

</script>


<style scoped>
.map-wrapper {
  position: relative;
  width: 50vw;
  height: 50vh;
}

#map {
  width: 100%;
  height: 100%;
}

.snow {
  pointer-events: none;
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.flake {
  position: absolute;
  top: -10%;
  color: white;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes fall {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(120vh) translateX(20px);
  }
}
</style>
