<script>
import {store} from "../store"
import axios from "axios";



export default {
    data() {
        return {
            store,
            product: null,
        }
    },
    methods:{
      getProjectId(id){
          axios.get('http://localhost:8000/api/prova/' + id).then(response => {
           
            console.log(response.data.results);
            this.product = response.data.results
            store.loading = false
            console.log(store.products);
              
          })
       },
    //    nextPage(id){
    //       axios.get('http://localhost:8000/api/prova/' + id +1).then(response => {
           
    //        console.log(response.data.results);
    //        this.product = response.data.results
    //        store.loading = false
    //       })
    //    }
    },
    mounted() {
        this.getProjectId( this.$route.params.id );
    },
    beforeRouteUpdate (to, from) {
        if(from.name == to.name){
           let newProductId = to.params.id
           this.getProjectId(newProductId)

       }
        
    }
}
    
</script>
<template>
    <div v-if="product">
        <router-link v-if="product.id > 1" class="btn btn-primary m-3" :to="{ name:'single-projects', params: {id: product.id-1} }">Precedente</router-link>
        <router-link v-if="product.id < 10" class="btn btn-primary m-3" :to="{ name:'single-projects', params: {id: product.id+1} }">Prossimo</router-link>

        <!-- <button class="btn btn-primary" @click="nextPage()">Pagina successiva</button> -->
        <h1>{{ product.name }}</h1>
        <img class="w-50" :src="product.image" alt="">
        <p>{{ product.description }}</p>
    </div>
</template>