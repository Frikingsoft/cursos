<template>
    <v-app class="pagina">
        <h1> pagina {{ $route.params.curso }} </h1>
        <h1> Desde una variable {{ parametro }}</h1>
    </v-app>
</template>
<script setup>
    import { ref } from "vue"
    import { useRoute } from "vue-router"
    const route = useRoute()
    const parametro = ref(route.params.curso)
</script>
<style scoped>
    .pagina{
        margin-top: 64px;
    }
</style>