<template>
<div class="adorno">
    <table>
    <thead>
    <tr>
        <th>Adorno</th>
        <th>Precio</th>
        <th>Imagen</th>
    </tr>
    </thead>
    <tr>
        <td>Caja de Velas</td>
        <td>50</td>
        <td><img src="https://i.imgur.com/ExJQJRt.jpeg" alt="vela divertida" width="130px" height="100px"></td>
    </tr>
    <tr>
        <td>Flores de fondant</td>
        <td>450</td>
        <td><img src="https://i.imgur.com/XiXVW3D.jpeg" alt="rosa hermosa" width="130px" height="100px"></td>
    </tr>
    <tr>
        <td>Numeros</td>
        <td>450</td>
        <td><img src="https://i.imgur.com/FyryDmU.jpeg" alt="numeros pastel" width="130px" height="100px"></td>
    </tr>
    <tr>
        <td>Cerezas</td>
        <td>430</td>
        <td><img src="https://i.imgur.com/b2TXPaa.jpeg" alt="cereza divertida" width="130px" height="100px"></td>
    </tr>
    <tr>
        <td>Granillo de chocolate</td>
        <td>4700</td>
        <td><img src="https://i.pinimg.com/736x/61/7c/d3/617cd3e9deb51125825724950b06c6b8--chocolates.jpg" alt="granillo choco" width="130px" height="100px"></td>
    </tr>
</table>
</div>
</template>
 <script>
export default {
  name: 'adornos',
  props: {
    msg: String
  }
}
</script>
<style scoped>
table {
    margin-left: 500px;
}
</style>