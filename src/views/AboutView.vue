<template>
  <div class="tabla">
    <h1>Pagina para pastelero</h1>
    <cantidadSabores msg="tabla"/>
    <cantidadAdornos msg="tabla"/>
    <pedidos msg="tabla"/>
  </div>
</template>
<script>
import cantidadSabores from '@/components/cantidadSabores.vue'
import cantidadAdornos from '@/components/cantidadAdornos.vue'
import pedidos from '@/components/pedidos.vue'
export default {
  name: 'pastelero',
  components: {
    cantidadSabores,
    cantidadAdornos,
    pedidos
  }
}
</script>