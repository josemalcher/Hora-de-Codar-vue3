<template>
  <div>
    <hr>
    <p>PROPs</p>
    <p>{{compEmail}}</p>
    <hr>
    <div v-if="ocupacao">
      <p class="paragrado-pai"><strong>Estou trabalhando no momento com:</strong></p>
      <ul>
        <li v-for="(tecnologia, index) in backend_skill" v-bind:key="index">{{tecnologia}}</li>
      </ul>
      <p>Também trabalho usando:</p>
      <ul>
        <li v-for="tecfront in frontend_skill" :key="tecfront.id">
          {{tecfront.language}}
        </li>
      </ul>
    </div>
    <div v-else>
      <p><strong>Estou em busca de uma Vaga</strong></p>
      <p v-show="email_view"><strong>Meu email é: {{compEmail}}</strong></p>
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
  props:{
    compEmail: String,
    ocupacao: false
  },
  components: {
    Picture
  },
  data() {
    return {
      //ocupacao: false,
      email_view: true,
      blog: 'https://josemalcher.net',
      //email: '',
      textoBotao: 'Mostrar email',
      backend_skill: ['PHP', 'JS', 'C#', 'NODE'],
      frontend_skill:[
        {id:1, language: 'HTML'},
        {id:2, language: 'CSS'},
        {id:3, language: 'VUE'},
        {id:4, language: 'REACT'},
      ]
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
