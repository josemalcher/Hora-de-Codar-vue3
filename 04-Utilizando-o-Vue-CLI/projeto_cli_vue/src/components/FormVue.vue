<template>
  <div>
    <form action="">
      <ImputTexts/>
      <ImputTexts/>
      <SubmitVue/>
    </form>
  </div>
</template>

<script>
import ImputTexts from "./form/ImputTexts";
import SubmitVue from "./form/SubmitVue";
export default {
  name: "FormVue",
  components:{
    ImputTexts, SubmitVue
  }
}
</script>

<style scoped>

</style>
