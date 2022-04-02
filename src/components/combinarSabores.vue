<template>
    <div class="combinarS">
        <h2>!Por favor elige el sabor de tu pastel¡</h2><br>
    <input type="radio" id="chocolate" name="sabores" value="Chocolate" v-model="picked">
    <label for="chocolate">Chocolate</label><br>
    <input type="radio" id="vainilla" name="sabores" value="Vainilla" v-model="picked">
    <label for="vainilla">Vainilla</label><br>
    <input type="radio" id="fresa" name="sabores" value="Fresa">
    <label for="fresa">Fresa</label><br>
    <input type="radio" id="tresleches" name="sabores" value="Tresleches" v-model="picked">
    <label for="tresleches">Tres leches</label><br>
    <input type="radio" id="zarzamora" name="sabores" value="Zarzamora" v-model="picked">
    <label for="zarzamora">Zarzamora</label><br>
    <input type="radio" id="frutosrojos" name="sabores" value="Frutosrojos" v-model="picked">
    <label for="frutosrojos">Frutos rojos</label><br>
    <span> Eligio: {{picked}} </span>
    </div>
</template>
<script>
export default {
  name: 'combinarSabores',
  props: {
    msg: String
  }
}
</script>