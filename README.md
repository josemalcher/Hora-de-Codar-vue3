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



[Voltar ao Índice](#indice)

---


## <a name="parte6">6 - Dados em componentes (data)</a>



[Voltar ao Índice](#indice)

---


## <a name="parte7">7 - Entendendo os Lifecycle hooks (ciclo de vida)</a>



[Voltar ao Índice](#indice)

---


## <a name="parte8">8 - Hierarquia de componentes</a>



[Voltar ao Índice](#indice)

---


## <a name="parte9">9 - Conhecendo as diretivas (v-if, v-show, v-for)</a>



[Voltar ao Índice](#indice)

---


## <a name="parte10">10 - Atributos dinâmicos</a>



[Voltar ao Índice](#indice)

---


## <a name="parte11">11 - Métodos</a>



[Voltar ao Índice](#indice)

---


## <a name="parte12">12 - CSS Scoped e CSS global</a>



[Voltar ao Índice](#indice)

---


## <a name="parte13">13 - Renderização de listas (v-for)</a>



[Voltar ao Índice](#indice)

---


## <a name="parte14">14 - Eventos (@submit e @click)</a>



[Voltar ao Índice](#indice)

---


## <a name="parte15">15 - Múltiplos eventos</a>



[Voltar ao Índice](#indice)

---


## <a name="parte16">16 - Reutilização de componentes</a>



[Voltar ao Índice](#indice)

---


## <a name="parte17">17 - Utilizando props</a>



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

