<script>
import axios from "axios";
import {store} from "../src/store"
import AppHeader from "./components/AppHeader.vue"

export default {
    name: "AppMain",
    data() {
        return {
            store,
           
        }
    },
    components:{
      AppHeader
    },
    methods:{
      getApi(){
          axios.get(store.apiUrl).then(response => {
            params:{
              page: 4
            }
            console.log(response.data.results);
            store.products = response.data.results.data
            store.loading = false
            store.lastPage = response.data.results.last_page
            console.log(store.products);
              
          })
      }
    },
    mounted(){
      this.getApi()
    } 
}
</script>

<template>

  <header>

    <AppHeader></AppHeader>
    
  </header>

  <main>
  </main>

  <router-view></router-view>

</template>

<style scoped>
body{
    background-color: #222;
}
</style>
