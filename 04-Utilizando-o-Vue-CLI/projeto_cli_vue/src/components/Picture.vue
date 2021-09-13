<template>
<div>
  <img :src="avatar" :alt="desc">
  <MudarImagem @mudarImagem="trocarImagem"/>
</div>
</template>

<script>
import MudarImagem from "./MudarImagem";

export default {
  name: "Picture",
  components: {MudarImagem},
  data(){
    return{
      avatar: '/img/avatar.png',
      desc: 'avatar do perfil'
    }
  },
  methods:{
    trocarImagem(){
      this.avatar =  '/img/avatar2.png'
    }
  }
}
</script>

<style scoped>

</style>
