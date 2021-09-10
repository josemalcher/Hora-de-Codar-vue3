<template>
<div>
  <h1>Olá Vue</h1>
  <p>Meu nome é {{nome}} e trabalho como {{job}}</p>
</div>
</template>

<script>
export default {
  name: "PrimeiroComponente",
  data(){
    return{
      nome: "José",
      job: 'Dev'
    }
  }
}
</script>

<style scoped>

</style>
