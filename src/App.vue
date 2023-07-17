<script>
import axios from "axios";

export default {
    name: "AppMain",
    data() {
        return {
            apiUrl: "http://localhost:8000/api/prova",
           
        }
    },
    methods:{
      getApi(){
          axios.get(this.apiUrl).then(response => {
                      console.log(response.data);
      
          })
      }
    },
    mounted(){
      this.getApi()
    } 
}
</script>

<template>
  
</template>

<style scoped>
</style>
