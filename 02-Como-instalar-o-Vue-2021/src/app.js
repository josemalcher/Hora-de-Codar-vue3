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
