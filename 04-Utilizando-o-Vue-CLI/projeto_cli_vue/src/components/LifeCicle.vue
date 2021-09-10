<template>
<div>
  <h1>Meu nome é: {{nome}}</h1>
</div>
</template>

<script>
export default {
  name: "LifeCicle",
  data(){
    return{
      nome: 'EM DATA...'
    }
  },
  created() {
    setTimeout(()=> {
      this.nome = 'CREATED...'
    }, 2000)
  },
  mounted() {
    setTimeout(()=> {
      this.nome = 'MOUNTED...'
    }, 4000)
  }
}
</script>

<style scoped>

</style>
