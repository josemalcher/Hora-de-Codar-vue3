<template>
<div>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Projetos</a></li>
    <li><a href="#">Contato</a></li>
    <li v-if="esta_logado"><a href="#">Meu Perfil</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Header",
  props:['esta_logado']
}
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  background: darkgrey;
}
li{
  margin-right: 10px;
}
a {
  color: #DDD;
  text-decoration: none;
  transition: .5s;

}
a:hover {
  color: turquoise;

}
</style>
