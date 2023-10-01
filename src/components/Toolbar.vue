<template>
     <v-toolbar
      dark
      prominent
      class="bg-light-blue-darken-4 toolbar"
    >
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-btn @click="abrir_menu = !abrir_menu" class="boton" icon>
                    <v-icon icon="fas fa-table-list"/>
                </v-btn>
            </v-col>
            <v-col cols="6" class="titulo">
                <v-toolbar-title class="titulo2">Instituto de Alta Especialización -- Melo</v-toolbar-title>
            </v-col>
            <v-col cols="3">

      <nav class="menu">
        <Router-link v-for="(boton,index) in botones" :key="index" :to="boton.url">
            <v-btn icon>
                <v-icon :icon="boton.icono"/>
            </v-btn> 
        </Router-link>
      
      </nav>
            </v-col>
      </v-row>
      </v-container>
    </v-toolbar>
</template>
<script setup>
import { inject, ref } from "vue";
    const abrir_menu = inject("abrir_menu")
    const botones = ref([
        {url:"/",icono:"fas fa-home"},
        {url:"/login",icono:"fas fa-right-to-bracket"},
        {url:"/registro",icono:"fas fa-id-card"},
        {url:"/contacto",icono:"fas fa-address-book"},
        {url:"/colaboradores",icono:"fas fa-users"}
    ])
</script>
<style scoped>
    .menu{
        
        display: flex;
        justify-content: flex-end;
    }
    .menu a{
        text-decoration: none;
        color: white;
    }
    .boton{
        position: absolute;
        left: 0;
        margin-left: 8px;
    }
    .titulo{
       
        display: flex;
        align-items: center;
    }
    .titulo2{
        display: flex;
        justify-content: center;
       
    }
    .toolbar{
        position: fixed;
        z-index: 1;
    }


</style>