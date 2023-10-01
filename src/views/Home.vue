<template>
  <v-app class="inicio">
    <Carousel/>
    <Cursos/>
  </v-app>
</template>

<script setup>
import Cursos from "@/components/Cursos.vue"
import Carousel from "@/components/Carousel.vue"
</script>
<style scoped>
  .inicio{
    margin-top: 64px;
  }
</style>
