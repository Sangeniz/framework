<template>
    

<div class="sabor">
    <table>
        <thead>
     <tr>
        <th>Sabor</th>
        <th>Precio</th>
        <th>Imagen</th>
    </tr>
        </thead>
    <tr>
        <td>Chocolate</td>
        <td>500</td>
        <td><img src="https://i.imgur.com/XH93QTm.jpeg" alt="delicioso chocolate" width="130px" height="100px"></td>
    </tr>
    <tr>
        <td>Vainilla</td>
        <td>450</td>
        <td><img src="https://th.bing.com/th/id/R.11796a42a849984565b167f5fee5cd48?rik=p4J4kghgmpWudA&riu=http%3a%2f%2fcdn2.cocinadelirante.com%2fsites%2fdefault%2ffiles%2fimages%2f2017%2f06%2fesponjosopasteldevanilla.jpg&ehk=fIj%2fIt5mK2eMiLXYxklAsSL6YtQ7iDmSZw%2ffHNxbgo0%3d&risl=&pid=ImgRaw&r=0" alt="vainilla deliciosa"  width="130px" height="100px"></td>
    </tr>
    <tr>
        <td>Fresa</td>
        <td>450</td>
        <td><img src="https://i.imgur.com/WHZgaNB.jpeg" alt="fresa sabrosa" width="130px" height="100px"></td>
    </tr>
    <tr>
        <td>Tres leches</td>
        <td>430</td>
        <td><img src="https://i.imgur.com/a3XacHd.jpeg" alt="3leches" width="130px" height="100px"></td>
    </tr>
    <tr>
        <td>Zarzamora</td>
        <td>4700</td>
        <td><img src="https://i.imgur.com/63Tf9bR.jpeg" alt="zarzamora rica" width="130px" height="100px"></td>
    </tr>
    <tr>
        <td>Frutos rojos</td>
        <td>430</td>
        <td><img src="https://i.imgur.com/t9OuUaT.jpeg" alt="frutos rojos deliciosos" width="130px" height="100px"></td>
    </tr>
        </table>
    </div>
    </template>

    <script>
export default {
  name: 'sabores',
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