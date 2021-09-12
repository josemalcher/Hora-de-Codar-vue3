<template>
<div>
  <img :src="avatar" :alt="desc">
</div>
</template>

<script>
export default {
  name: "Picture",
  data(){
    return{
      avatar: '/img/avatar.png',
      desc: 'avatar do perfil'
    }
  }
}
</script>

<style scoped>

</style>
