<template>
  <div>
    <div v-if="ocupacao">
      <p class="paragrado-pai"><strong>Estou trabalhando no momento com:</strong></p>
      <ul>
        <li>JS</li>
        <li>VUE</li>
        <li>C#</li>
      </ul>
    </div>
    <div v-else>
      <p><strong>Estou em busca de uma Vaga</strong></p>
      <p v-show="email_view"><strong>Meu email é: teste@teste.com</strong></p>
    </div>
    <p v-if="4 > 2">4 é maior que 2</p>
    <hr>
    <p>Meu blob: <a v-bind:href="blog" target="_blank">Visitar</a></p>
    <hr>
    <Picture/>
    <hr>
    <button @click="showEmail">{{textoBotao}}</button>
  </div>
</template>

<script>
import Picture from "./Picture";

export default {
  name: "Info",
  components: {
    Picture
  },
  data() {
    return {
      ocupacao: true,
      email_view: false,
      blog: 'https://josemalcher.net',
      textoBotao: 'Mostrar email'
    }
  }, methods:{
    showEmail(){
      //console.log("Testando email")
      this.email_view = !this.email_view;
      if(!this.textoBotao){
        this.textoBotao = 'Mostrar E-mail'
      }else{
        this.textoBotao = 'Esconder E-mail'
      }
    }
  }
}
</script>

<style scoped>
.paragrado-pai{
  color: darkred;
}
</style>
