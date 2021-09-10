<template>
<div>
  <h2>Esta é a descrição da Pessoa: {{ nome}}</h2>
  <hr>
  <info/>
  <hr>
  <FormVue/>
</div>
</template>

<script>
import Info from "./Info";
import FormVue from "./FormVue";
export default {
  name: "Pessoa",
  components:{
    Info,
    FormVue
  },
  data(){
    return {
      nome: 'José'
    }
  }
}
</script>

<style scoped>

</style>
