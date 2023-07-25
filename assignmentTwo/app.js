const app = Vue.createApp({
    data(){
        return {
            input: '',
            input2: ''
        }
    },
    methods: {
        showAlert(){
            alert("Show Alert");
        },
        showInput(event){
            const value = event.target.value;
            this.input = value;
        },
        showInputEnter(event){
            const value = event.target.value;
            this.input2 = value;
        }
    }
});
app.mount("#assignment");
