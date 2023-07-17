<script>
import {store} from "../store"

export default {
    name: "AppMain",
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <h1>Products</h1>
    <div class="d-flex flex-wrap">
        <div v-for="product in store.products" class="card">
            <h5>{{product.name}}</h5>
            <img :src=" product.image " alt="">
            <p class="card-text">{{product.description}}</p>
            <a :href="product.link" class="btn btn-primary">GO</a>
        </div>
    </div>
   
</template>
<style scoped>
body{
    background-color: #222;
}

.card{
    width: calc(100% / 4 - 40px);
    margin: 20px;
    padding: 10px;
}
</style>