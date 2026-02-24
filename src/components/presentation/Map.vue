<template>
    <div id="map" class="w-[80vw] h-[50vh] sm:w-[50vw] rounded-md"></div>
    <div class="relative top-[-4rem] z-500 w-full flex justify-center" >
        <div class="inline bg-orange-600 px-4 py-2 text-white rounded-sm">{{ coords.label }}</div>
    </div>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css"
import * as L from 'leaflet';
import { onMounted, ref, watch, type Ref } from "vue";
import type { MapCoords } from "@/assets/coords";

const props = defineProps<{
  coords: MapCoords,
}>()

const map: Ref<L.Map | null> = ref(null)

onMounted(() => {
  map.value = L.map('map').setView([props.coords.lat, props.coords.lng], props.coords.zoom)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map.value)
})

// Watch for prop changes
watch(
  () => [props.coords],
  ([newCoords]) => {
    if (map.value && newCoords) {
      map.value.flyTo([newCoords.lat, newCoords.lng], newCoords.zoom, {
        animate: true
      })
    }
  }
)
</script>
