<template>
    <h1>Calcul de la destination idéale en cours...</h1>

    <div class="mb-8">
        <UProgress :modelValue="increment" />
    </div>

    <Map :coords="mapCoords" />
</template>

<script setup lang="ts">
import { coords, type MapCoords } from '@/assets/coords';
import Map from '@/components/presentation/Map.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const mapCoords = ref<MapCoords>(coords[0]!);

const increment = ref(0);

onMounted(() => {
    setInterval(() => {
        increment.value += 2;

        let mapIndex = Math.floor(increment.value / 10);
        if (mapIndex > 9) {
            mapIndex = 9;
        }
        mapCoords.value = coords[mapIndex]!;

        if (increment.value >= 97) {
            setTimeout(() => {
                router.push('/error');
            }, 2000);
        }
    }, 1000);
});

</script>
