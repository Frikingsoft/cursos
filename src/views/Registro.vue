<template>
  <v-app class="pagina">
    <v-form v-model="valid" class="mt-5">
      <v-card
        class="mx-auto"
        :max-width="800"
        :color="color"
        :variant="variant"
      >
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="8" v-for="(campo,index) in campos" :key="index">
              <v-text-field
                v-model="campo.valor"
                :rules="nameRules"
                :counter="10"
                :label="campo.etiqueta"
                required
                hide-details
                :type="campo.type"
              ></v-text-field>
            </v-col>
            {{ campos }}
          </v-row>
          <v-col class="botones">
            <v-btn tonal class="bg-light-blue-darken-4 boton" v-for="(boton,index) in botones" :key="index" @click="enviar">
                {{ boton.nombre }}
            </v-btn>
          </v-col>
        </v-container>
      </v-card>
    </v-form>
  </v-app>
</template>
<script setup>
    import { ref } from "vue";
    const campos = ref([
        {etiqueta:"Nombre",valor:"",type:"text"},
        {etiqueta:"Apellido",valor:"",type:"text"},
        {etiqueta:"Correo",valor:"",type:"e-mail"},
        {etiqueta:"Contraseña",valor:"",type:"password"}
    ])
    const botones = ref([
        {nombre:"Enviar"},
        {nombre:"Login"}
    ])
    const enviar=()=>{
        campos.value.forEach(element => console.log(element.valor));
        //const usuario = ref()
    }
</script>
<style scoped>
.pagina {
  margin-top: 64px;
}
.botones{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
}
.boton{
    width: 100px;
    margin-right: 20px;
}
</style>
