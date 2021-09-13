<template>
  <div>
    <button @click="$emit('mudarImagem')">Trocar Imagem de Perfil</button>
  </div>
</template>

<script>
export default {
  name: "MudarImagem",
  emits:['mudarImagem']
}
</script>

<style scoped>

</style>
