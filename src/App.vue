<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue"
import {store} from "../src/store"

export default {
    name: "AppMain",
    data() {
        return {
            store,
           
        }
    },
    components:{
        ProjectCard
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
  <main>
      <ProjectCard />
  </main>
</template>

<style scoped>
body{
    background-color: #222;
}
</style>
