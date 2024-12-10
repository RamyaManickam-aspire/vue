<template>
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in productList">
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.quantity }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
defineProps({
    productList: Array
})
</script>