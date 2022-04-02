<template>
    <div class="tabla">
        <table>
    <thead>
        <tr>
            <th>Numero</th>
            <th>Adorno</th>
            <th>Precio</th>
        </tr>
        </thead>
        <tr>
            <td>1</td>
            <td>Caja de Velas</td>
            <td>50</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Flores de fondant</td>
            <td>450</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Numeros</td>
            <td>450</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Cerezas</td>
            <td>430</td>
        </tr>
        <tr><td>5</td>
            <td>Granillo de chocolate</td>
            <td>4700</td>
        </tr>
    </table>
    <br><br><br>
    </div>
</template>
<script>
export default {
  name: 'cantidadAdornos',
  props: {
    msg: String
  }
}
</script>
<style>
table {
margin-left: 200px;
}
</style>