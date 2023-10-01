<template>
  <Toolbar/>
  <Drawer/>
  <Router-view/>
  <Footer/>

</template>

<script setup>
  import Toolbar from "@/components/Toolbar.vue"
  import Drawer from "@/components/Drawer.vue"
  import Footer from "@/components/Footer.vue"
  import { provide, ref } from "vue"
 
  const abrir_menu = ref(false)
  provide("abrir_menu",abrir_menu)

</script>
