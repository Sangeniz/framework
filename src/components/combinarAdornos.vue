<template>
    <div class="combinarA">
    <h2>!Por favor elige los adornos que quieras para tu pastel¡</h2><br>
    <input type="checkbox" id="topping1" name="topping1" value="velas" v-model.lazy="checkedNames">
    <label for="topping1">Adornar con velas</label><br>
    <input type="checkbox" id="topping2" name="topping2" value="flores" v-model.lazy="checkedNames">
    <label for="topping2">Adornar con flores de foundant</label><br>
    <input type="checkbox" id="topping3" name="topping3" value="Numeros" v-model.lazy="checkedNames">
    <label for="topping3">Adornar con numeros</label><br>
    <input type="checkbox" id="topping4" name="topping4" value="Cerezas" v-model.lazy="checkedNames">
    <label for="topping2">Adornar con Cerezas</label><br>
    <input type="checkbox" id="topping5" name="topping5" value="Granillo" v-model.lazy="checkedNames">
    <label for="topping3">Adornar con granillo de chocolate</label><br><br>

    </div>


    }
})
</template>
<script>

export default  {
  name: 'combinarAdornos',
  props: {
    msg: String
  }
}




</script>