<template>
  <div>
    <PrimeiroComponente></PrimeiroComponente>
    <p>Dado d APP {{ appMensagem }}</p>
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente";

export default {
  name: 'App',
  components: {
    PrimeiroComponente
  },
  data() {
    return {
      appMensagem: "Teste"
    }
  }
}
</script>

<style>

</style>
