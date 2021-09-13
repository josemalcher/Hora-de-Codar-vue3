# Hora-de-Codar - Curso de Vue 3

https://www.youtube.com/playlist?list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL



## <a name="indice">Índice</a>

1. [Introdução (2021)](#parte1)     
2. [Como instalar o Vue (2021)](#parte2)     
3. [Inputs e Data Binding](#parte3)     
4. [Utilizando o Vue CLI](#parte4)     
5. [Criando componentes](#parte5)     
6. [Dados em componentes (data)](#parte6)     
7. [Entendendo os Lifecycle hooks (ciclo de vida)](#parte7)     
8. [Hierarquia de componentes](#parte8)     
9. [Conhecendo as diretivas (v-if, v-show, v-for)](#parte9)     
10. [Atributos dinâmicos](#parte10)     
11. [Métodos](#parte11)     
12. [CSS Scoped e CSS global](#parte12)     
13. [Renderização de listas (v-for)](#parte13)     
14. [Eventos (@submit e @click)](#parte14)     
15. [Múltiplos eventos](#parte15)     
16. [Reutilização de componentes](#parte16)     
17. [Utilizando props](#parte17)     
18. [Emit](#parte18)     
19. [Criando o projeto do curso](#parte19)     
20. [Criando uma API com JSON server](#parte20)     
21. [Implementando o Vue Router](#parte21)     
22. [Finalizando cabeçado e rodapé do projeto](#parte22)     
23. [Criando banner da aplicação](#parte23)     
24. [Criando formulário de cadastro](#parte24)     
25. [Resgatando dados do banco e inserindo no formulário](#parte25)     
26. [Inserindo dados no banco](#parte26)     
27. [Criando componente de mensagens do sistema](#parte27)     
28. [Criando a tela de pedidos (Dashboard)](#parte28)     
29. [Resgatando pedidos do banco](#parte29)     
30. [Recebendo os status dos pedidos](#parte30)     
31. [Removendo pedidos do sistema](#parte31)     
32. [Atualização de pedidos](#parte32)     
33. [Mensagens nas atualizações e remoções de pedido](#parte33)     
34. [Conclusão do curso](#parte34)     
---


## <a name="parte1">1 - Introdução (2021)</a>

- [https://youtu.be/wsAQQioPIJs](https://youtu.be/wsAQQioPIJs)



[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - Como instalar o Vue (2021)</a>

- [https://youtu.be/-w1VVGycLRM](https://youtu.be/-w1VVGycLRM)

[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Inputs e Data Binding</a>

```javascript
const MyName = {
    data(){
        return{
            nome: "José",
            idade: 37,
            input_name: ''
        }
    },
    methods:{
        submitForm(e) {
            e.preventDefault();

            console.log(this.input_name);

            this.nome = this.input_name;
        }
    }
}
Vue.createApp(MyName).mount("#app");

```

```html
<body>
    <div id="app">
        <form id="app-form">
            <input type="text" v-model="input_name" placeholder="Digite Seu nome">
            <input type="submit" value="Enviar" v-on:click="submitForm">
        </form>
        <p>O meu nome É: {{nome}} e tenho {{idade}} de idade</p>
        <p>DataBind {{input_name}}</p>
    </div>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="src/app.js"></script>
</body>
```

[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - Utilizando o Vue CLI</a>

- [04-Utilizando-o-Vue-CLI/projeto_cli_vue](04-Utilizando-o-Vue-CLI/projeto_cli_vue)

[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - Criando componentes</a>

```vue
<template>
<PrimeiroComponente></PrimeiroComponente>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente";

export default {
  name: 'App',
  components: {
    PrimeiroComponente
  }
}
</script>

<style>

</style>

```

```vue
<template>
    <PrimeiroComponente />
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente";

export default {
  name: 'App',
  components: {
    PrimeiroComponente
  }
}
</script>

<style>

</style>

```

[Voltar ao Índice](#indice)

---


## <a name="parte6">6 - Dados em componentes (data)</a>

```vue
<template>
    <div>
        <h1>Olá Vue</h1>
        <p>Meu nome é {{nome}} e trabalho como {{job}}</p>
    </div>
</template>

<script>
    export default {
    name: "PrimeiroComponente",
    data(){
    return{
    nome: "José",
    job: 'Dev'
}
}
}
</script>

<style scoped>

</style>

```

[Voltar ao Índice](#indice)

---


## <a name="parte7">7 - Entendendo os Lifecycle hooks (ciclo de vida)</a>

```vue
<template>
<div>
  <h1>Meu nome é: {{nome}}</h1>
</div>
</template>

<script>
export default {
  name: "LifeCicle",
  data(){
    return{
      nome: 'EM DATA...'
    }
  },
  created() {
    setTimeout(()=> {
      this.nome = 'CREATED...'
    }, 2000)
  },
  mounted() {
    setTimeout(()=> {
      this.nome = 'MOUNTED...'
    }, 4000)
  }
}
</script>

<style scoped>

</style>

```

[Voltar ao Índice](#indice)

---


## <a name="parte8">8 - Hierarquia de componentes</a>



[Voltar ao Índice](#indice)

---


## <a name="parte9">9 - Conhecendo as diretivas (v-if, v-show, v-for)</a>

```vue
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

```

[Voltar ao Índice](#indice)

---


## <a name="parte10">10 - Atributos dinâmicos</a>

```vue
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

```

[Voltar ao Índice](#indice)

---


## <a name="parte11">11 - Métodos</a>

```vue
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
  components: {
    Picture
  },
  data() {
    return {
      ocupacao: false,
      email_view: false,
      blog: 'https://josemalcher.net',
      textoBotao: 'Mostrar email'
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

</style>

```

[Voltar ao Índice](#indice)

---


## <a name="parte12">12 - CSS Scoped e CSS global</a>

- Global
- Scoped

```vue
<template>
<div>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Projetos</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Header"
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

```

[Voltar ao Índice](#indice)

---


## <a name="parte13">13 - Renderização de listas (v-for)</a>

```vue
<template>
  <div>
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
      <p v-show="email_view"><strong>Meu email é: teste@teste.com</strong></p>
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
  components: {
    Picture
  },
  data() {
    return {
      ocupacao: true,
      email_view: false,
      blog: 'https://josemalcher.net',
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

```

[Voltar ao Índice](#indice)

---


## <a name="parte14">14 - Eventos (@submit e @click)</a>

```vue
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

```

[Voltar ao Índice](#indice)

---


## <a name="parte15">15 - Múltiplos eventos</a>

- [04-Utilizando-o-Vue-CLI/projeto_cli_vue/src/components/MultiplosEventos.vue](04-Utilizando-o-Vue-CLI/projeto_cli_vue/src/components/MultiplosEventos.vue)

```vue
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

```

[Voltar ao Índice](#indice)

---


## <a name="parte16">16 - Reutilização de componentes</a>

```vue
<template>
  <div>
    <h1>Olá Vue</h1>
    <p>Meu nome é {{ nome }} e trabalho como {{ job }}</p>
    <hr>
    <MultiplosEventos/>
    <hr>
    <Reutilizacao/>
    <Reutilizacao/>
    <Reutilizacao/>
    <Reutilizacao/>
  </div>
</template>

<script>
import MultiplosEventos from "./MultiplosEventos";
import Reutilizacao     from "./Reutilizacao";


export default {
  name: "PrimeiroComponente",
  components: {MultiplosEventos, Reutilizacao},
  data() {
    return {
      nome: "José",
      job: 'Dev'
    }
  }
}
</script>

<style scoped>

</style>

```

[Voltar ao Índice](#indice)

---


## <a name="parte17">17 - Utilizando props</a>

- [04-Utilizando-o-Vue-CLI/projeto_cli_vue/src/components/Pessoa.vue](04-Utilizando-o-Vue-CLI/projeto_cli_vue/src/components/Pessoa.vue)

```vue
<template>
  <div>
    <h2>Esta é a descrição da Pessoa: {{ nome}}</h2>
    <!--  <Info compEmail="email.PROP@email.com" />-->
    <Info :compEmail="email" :estaTrabalhando="false" />
    <FormVue/>
  </div>
</template>

<script>
import Info from "./Info";
import FormVue from "./FormVue";
export default {
  name: "Pessoa",
  components:{
    Info,
    FormVue
  },
  data(){
    return {
      nome: 'José',
      email: 'email.PROP@email.com'
    }
  }
}
</script>

```

```vue
  props:{
    compEmail: String,
    ocupacao: false
},
```

[Voltar ao Índice](#indice)

---


## <a name="parte18">18 - Emit</a>



[Voltar ao Índice](#indice)

---


## <a name="parte19">19 - Criando o projeto do curso</a>



[Voltar ao Índice](#indice)

---


## <a name="parte20">20 - Criando uma API com JSON server</a>



[Voltar ao Índice](#indice)

---


## <a name="parte21">21 - Implementando o Vue Router</a>



[Voltar ao Índice](#indice)

---


## <a name="parte22">22 - Finalizando cabeçado e rodapé do projeto</a>



[Voltar ao Índice](#indice)

---


## <a name="parte23">23 - Criando banner da aplicação</a>



[Voltar ao Índice](#indice)

---


## <a name="parte24">24 - Criando formulário de cadastro</a>



[Voltar ao Índice](#indice)

---


## <a name="parte25">25 - Resgatando dados do banco e inserindo no formulário</a>



[Voltar ao Índice](#indice)

---


## <a name="parte26">26 - Inserindo dados no banco</a>



[Voltar ao Índice](#indice)

---


## <a name="parte27">27 - Criando componente de mensagens do sistema</a>



[Voltar ao Índice](#indice)

---


## <a name="parte28">28 - Criando a tela de pedidos (Dashboard)</a>



[Voltar ao Índice](#indice)

---


## <a name="parte29">29 - Resgatando pedidos do banco</a>



[Voltar ao Índice](#indice)

---


## <a name="parte30">30 - Recebendo os status dos pedidos</a>



[Voltar ao Índice](#indice)

---


## <a name="parte31">31 - Removendo pedidos do sistema</a>



[Voltar ao Índice](#indice)

---


## <a name="parte32">32 - Atualização de pedidos</a>



[Voltar ao Índice](#indice)

---


## <a name="parte33">33 - Mensagens nas atualizações e remoções de pedido</a>



[Voltar ao Índice](#indice)

---


## <a name="parte34">34 - Conclusão do curso</a>



[Voltar ao Índice](#indice)

---

