<template>
  <v-layout>  
    <v-footer
        class="bg-light-blue-darken-4 text-center d-flex flex-column"
    >
        <div>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="text"
        ></v-btn>
        </div>

        <div class="pt-0">
         Todos los derechos reservados UTU - Instituto de Alta Especialización
        </div>

        <v-divider></v-divider>

        <div>
        {{ new Date().getFullYear() }} — <strong> Cerro Largo</strong>
        </div>
    </v-footer>
  </v-layout>
</template>
<script setup>
import { ref } from "vue";

    const icons = ref(
        [
        'mdi:mdi-facebook',
        'mdi:mdi-twitter',
        'mdi:mdi-linkedin',
        'mdi:mdi-instagram',
      ]
    )
</script>