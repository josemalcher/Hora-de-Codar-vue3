<template>
  <div>
    <PrimeiroComponente></PrimeiroComponente>
    <p>Dado d APP {{ appMensagem }}</p>
    <br>
    <LifeCicle />
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente";
import LifeCicle from "./components/LifeCicle";

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCicle
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
