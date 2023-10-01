<template>
    <h1 class="titulo">Cursos</h1>
    
    <v-card
      class="mx-auto"
      max-width="800"
    >
     <v-container fluid class="tarjetas"  >
        <v-row dense>
          <v-col 
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.img"
                class="align-end imagen"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
                @click="entrar_cursos(card.ruta)"
              >
                <v-card-title class="text-white" :v-text="card.title"></v-card-title>
              </v-img>
  
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn size="small" color="blue" variant="text" icon="mdi-heart"></v-btn>
  
                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>
  
                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
  const cards = ref ([
        { title: ' Tecnólogo en Equinos', img: "/equinos.jpg", flex: 12,ruta:"Tecnologo_en_Equinos" },
        { title: ' Tecnólogo. en Administracion', img:"/adm.jpg", flex: 12,ruta:"Tecnologo_en_Administracion" },
        { title: 'Técnico en Redes y Software', img:"/redes.jpg", flex: 12,ruta:"Tecnologo_en_Redes_y_Software" },
        { title: ' Bachillerato en Infromática',  img:"/infor.jpg", flex: 12,ruta:"Bachillerato_de_Informatica" }
  ])
const router = useRouter()
const entrar_cursos = (e)=>{
  router.push(`/cursos/${e}`)
}
</script>

<style scoped>
.titulo{
    text-align:center;
    color: rgba(35, 33, 33, 0.906); text-shadow: black 0.1em 0.1em 0.2em
}
.imagen{
  cursor: pointer;
}
</style>