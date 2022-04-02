<template>
    <div class="cantidadS">
    <table>
        <thead>
    <tr>
        <th>Numero</th>
        <th>Sabor</th>
        <th>Existencia</th>
    </tr>
        </thead>
    <tr>
        <td>1</td>
        <td>Chocolate</td>
        <td>50</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Vainilla</td>
        <td>450</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Fresa</td>
        <td>450</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Tres leches</td>
        <td>430</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Zarzamora</td>
        <td>4700</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Frutos rojos</td>
        <td>430</td>
    </tr>
        </table>
    <br><br><br>
    </div>
</template>
<script>
export default {
  name: 'cantidadSabores',
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