<template>
  <div>
    <h1>Olá Vue</h1>
    <p>Meu nome é {{ nome }} e trabalho como {{ job }}</p>
    <hr>
    <MultiplosEventos/>
  </div>
</template>

<script>
import MultiplosEventos from "./MultiplosEventos";

export default {
  name: "PrimeiroComponente",
  components: {MultiplosEventos},
  data() {
    return {
      nome: "José",
      job: 'Dev'
    }
  }
}
</script>

<style scoped>

</style>
