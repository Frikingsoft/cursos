<template>
    <v-layout>
        <v-navigation-drawer
        v-model="abrir_menu"
        temporary
        
      >
        <v-list-item
          prepend-avatar=""
          title="John Leider"
          class="usuario bg-light-blue-darken-4"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>    
</template>
<script setup>
    import { inject } from "vue";
    const abrir_menu = inject("abrir_menu")
</script>
<style scoped>
    .usuario{
        height: 64px;
    }
    .v-navigation-drawer__scrim{
      position: fixed;
      height: 100vh;
      opacity: .3;
    }
</style>