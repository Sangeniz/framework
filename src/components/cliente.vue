

<template>
    <div clas="clienteC">
    <label for="nombre">Nombre:     </label>
    <input type="text" id="nombre" name="nombre" v-model="nombre"><br>
    <console class="log">{{$store.state.nombre}}</console>
    <div class="tex">{{$store.state.nombre}}</div>
    <label for="apellido">Apellido:</label>
    <input type="text" id="apellido" last-name="apellido" v-model="apellido"><br>
    <label for="tel1">Teléfono:</label>
    <input type="tel" id="tel1" name="tel1" maxlength="10" v-model="tel1"><br>
    <label for="correo1">Input de Correo:</label>
    <input type="email" id="correo1" name="correo1" v-model.lazy="correo1"><br>
    <label for="descp"> Descripción de pastel:</label>
    <input type="descrp" id="descp" name="descp" v-model.lazy="descp"><br>
     <button @click="agregar">enviar</button>
    </div>
   <div>
       <input type="text" v-model="naranja">
       <div class="tex">{{$store.state.naranja}}</div>
   </div>
</template>
<script>

export default {
  name: 'cliente',
  data() {
      return{
          naranja: "",
          nombre: "",
          apellido: "",
          tel1: "",
          correo1: "",
          descp: ""

      }
  },
  props: {
    msg: String,
    clienteC:{
        default(){
            return {
                nombre: ''
            }
        }
    }
  }
}

</script>