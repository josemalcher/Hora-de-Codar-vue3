<template>
  <div>
    <button @click="ativar($event)">Ativar</button>
    <span v-show="ativou">Ativado</span>
  </div>
</template>

<script>
export default {
  name: "Reutilizacao",
  data(){
    return{
      ativou: false
    }
  },
  methods:{
    ativar(e) {
      e.preventDefault();
      this.ativou = !this.ativou;
    }
  }
}
</script>

<style scoped>

</style>
