<script>
import {store} from "../store"
import axios from "axios";


export default {
    name: "AppMain",
    data() {
        return {
            store,
            currentPage: 1,
            
            
        }
    },
    methods:{
        nextPage(){
            if(this.currentPage < store.lastPage){
                let config = {
                    params:{
                    page: (this.currentPage + 1)
                }
                };

                axios.get(store.apiUrl, config).then(response => {
                console.log(response.data.results.current_page);
                store.products = response.data.results.data
                store.loading = false
                store.lastPage = response.data.results.last_page
                this.currentPage = response.data.results.current_page
                console.log(store.products);
                
                })
            }
        },
        prevPage(){
            if(this.currentPage >= 1){
                let config = {
                    params:{
                    page: (this.currentPage - 1)
                }
                };

                axios.get(store.apiUrl, config).then(response => {
                console.log(response.data.results.current_page);
                store.products = response.data.results.data
                store.lastPage = response.data.results.last_page
                this.currentPage = response.data.results.current_page
                console.log(store.products);
                
                })
            }
        },
        }
    }
</script>
<template>
    <h1>Products pagina ({{this.currentPage}} di {{ store.lastPage }})</h1>
    <p v-if="store.loading" class="m-3">Sta caricando...</p>
    <div class="d-flex flex-wrap">
        <div v-for="product in store.products" class="card">
            <h5>{{product.name}}</h5>
            <img :src=" product.image " alt="">
            <p class="card-text">{{product.description}}</p>
            <a :href="product.link" class="btn btn-primary">GO</a>
        </div>
    </div>
    <button class="btn btn-primary me-4 ms-3" @click="prevPage()">Pagina precedente</button>
    <button class="btn btn-primary" @click="nextPage()">Pagina successiva</button>
   
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