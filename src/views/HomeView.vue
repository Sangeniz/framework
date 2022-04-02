<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <div class="tabla">
    <sabores msg="tabla"/>
    <adornos msg="tablas"/>
  </div>
  <div class="cuestionario">
    <combinarSabores msg="cuestionario"/>
    <combinarAdornos msg="cuestionario"/>
    <cliente msg="cuestionario"/>
    </div>
  <div class="info">
    <informacion msg="informacion"/>
  </div>
  <div>
  <p>
    <button @click="persist">Guardar</button>
  </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import sabores from '@/components/sabores.vue' 
import adornos from '@/components/adornos.vue'
import combinarSabores from '@/components/combinarSabores.vue'
import combinarAdornos from '@/components/combinarAdornos.vue'
import cliente from '@/components/cliente.vue'
import informacion from '@/components/informacion.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    sabores,
    adornos,
    combinarSabores,
    combinarAdornos,
    cliente,
    informacion
  }
}
</script>
