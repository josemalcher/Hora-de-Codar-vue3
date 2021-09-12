<template>
  <div>
    <button @click="primeiro(txt1, $event),
                    segundo (txt2, $event),
                    terceiro()
     ">Ativar Multiplos eventos</button>
    <p>{{ multiplos_eventos }}</p>
    <p>{{ multiplos_eventos_2 }}</p>
  </div>
</template>

<script>
export default {
  name: "MultiplosEventos",
  data(){
    return{
      multiplos_eventos: '',
      multiplos_eventos_2: '',
      txt1: 'Primeiro Evento',
      txt2: 'Segundo Evento',
    }
  },
  methods:{
    primeiro(txt, e) {
      this.multiplos_eventos = this.txt1
    },
    segundo(txt, e) {
      setTimeout(()=>{
        this.multiplos_eventos_2 = this.txt2
      },1000)
    },
    terceiro() {
      setTimeout(()=>{
        this.multiplos_eventos   = ''
        this.multiplos_eventos_2 = ''
      },2000)
    }
  }
}
</script>

<style scoped>
div{
  margin: 100px
}
</style>
