<template>
<div>
  <h2>Esta é a descrição da Pessoa: {{ nome}}</h2>
<!--  <Info compEmail="email.PROP@email.com" />-->
  <Info :compEmail="email" :estaTrabalhando="false" />
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
      nome: 'José',
      email: 'email.PROP@email.com'
    }
  }
}
</script>

<style scoped>

</style>
