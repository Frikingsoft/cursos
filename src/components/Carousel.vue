
    <template>

        <v-container >
            <v-row class="fila mt-3">
               
                <v-col cols="8" >

                    <v-carousel show-arrows="hover" >
                        <v-carousel-item  v-for="(foto,index) in fotos" :key="index"
                        :src="foto.img"
                        ></v-carousel-item>
                    </v-carousel>

                </v-col>

            </v-row>

        </v-container>

    </template>

<style scoped>
.fila{
   
    justify-content: center;
}
</style>
<script setup>
import { ref } from 'vue';

    const fotos= ref([
        {img:"/fondo1.jpg"},
        {img:"/fondo2.jpg"},
        {img:"/fondo3.jpg"}

    ])
</script>