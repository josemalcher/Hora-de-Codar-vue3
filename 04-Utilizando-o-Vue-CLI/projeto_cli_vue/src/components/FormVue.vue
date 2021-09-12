<template>
  <div>
    <form action="" @submit="enviarForm($event)">
      <div>
        <input type="text" v-model="name">
      </div>
      <div>
        <input type="text" v-model="email">
      </div>
      <SubmitVue/>
    </form>
  </div>
</template>

<script>
import ImputTexts from "./form/ImputTexts";
import SubmitVue from "./form/SubmitVue";
export default {
  name: "FormVue",
  data(){
    return {
      name: '',
      email: ''
    }
  },
  components:{
    ImputTexts, SubmitVue
  },
  methods:{
    enviarForm(e){
      e.preventDefault();

      const name = this.name
      const email = this.email
      console.log('Nome digitado '+ name)
      console.log('Email digitado '+ email)
      //ajax

      //INSERT no banco

      console.log("Formulário Enviado...")
    }
  }
}
</script>

<style scoped>

</style>
