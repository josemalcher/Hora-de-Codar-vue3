<template>
  <div>
    <PrimeiroComponente></PrimeiroComponente>
    <p>Dado d APP {{ appMensagem }}</p>
    <hr>
    <LifeCicle />
    <hr>
    <pessoa/>
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente";
import LifeCicle from "./components/LifeCicle";
import Pessoa from "./components/Pessoa";


export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCicle,
    Pessoa
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
