<template>
  <div>
    <Header :esta_logado='true' />
    <hr>
    <PrimeiroComponente></PrimeiroComponente>
    <p class="teste">Dado d APP {{ appMensagem }}</p>
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
import Header from "./components/Header";

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCicle,
    Pessoa,
    Header
  },
  data() {
    return {
      appMensagem: "Teste"
    }
  }
}
</script>

<style>
body{
  background-color: cadetblue;
  color: darkblue;
}
a{
  color: red;
}
.teste{
  background-color: chocolate;
}
</style>
