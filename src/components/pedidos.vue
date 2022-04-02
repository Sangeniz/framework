<template>
    <div class="tabla">
    <h3>Pedidos</h3>
    <table>
        <thead>
            <tr>
                <th>Numero</th>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>Descripcion</th>
                <th>Sabor</th>
                <th>Adorno</th>
            </tr>
            </thead>
            <tr>
                <td>1</td>
                <td>Juan Sanchez Lopez</td>
                <td>5515158520</td>
                <td>juan@hotmail.com</td>
                <td>pastel de dos pisos</td>
                <td>chocolate</td>
                <td>numeros, cerezas</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Luis Rodriguez Martinez</td>
                <td>5515158751</td>
                <td>rodriguez@hotmail.com</td>
                <td>pastel de un piso para cumpleaños</td>
                <td>Fresa</td>
                <td>numeros, velas</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Erika Rubio Rosas</td>
                <td>5462858520</td>
                <td>Erika@hotmail.com</td>
                <td>pastel de bodas</td>
                <td>tres leches</td>
                <td>numeros, cerezas, granillo</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Luisa Mondragon Lopez</td>
                <td>8415155220</td>
                <td>luisa@hotmail.com</td>
                <td>pastel para 5 personas</td>
                <td>frutos rojos</td>
                <td>numeros, granillo</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
  name: 'pedidos',
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