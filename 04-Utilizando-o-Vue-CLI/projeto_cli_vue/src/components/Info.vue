<template>
  <div>
    <div v-if="ocupacao">
      <p>Estou trabalhando no momento com:</p>
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

  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      ocupacao: false,
      email_view: false
    }
  }
}
</script>

<style scoped>

</style>
