<template>
  <div>
    <h1>Olá Vue</h1>
    <p>Meu nome é {{ nome }} e trabalho como {{ job }}</p>
    <hr>
    <MultiplosEventos/>
    <hr>
    <Reutilizacao/>
    <Reutilizacao/>
    <Reutilizacao/>
    <Reutilizacao/>
  </div>
</template>

<script>
import MultiplosEventos from "./MultiplosEventos";
import Reutilizacao     from "./Reutilizacao";


export default {
  name: "PrimeiroComponente",
  components: {MultiplosEventos, Reutilizacao},
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
