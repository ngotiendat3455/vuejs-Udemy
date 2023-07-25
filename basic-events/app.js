const app = Vue.createApp({
    data(){
        return {
            counter: 0,
            name: '',
            lastName: ''
        }
    },
    methods: {
        add(num){
            this.counter += num;
        },
        reduce(num){
            this.counter += num;
        },
        clearInput(){
            this.name = '';
            this.lastName = '';
        },
        submitForm(event){
            alert("submit");
        }
    },
    computed: {
        fullName(){
            if(this.name || this.lastName){
                return this.name || this.lastName;
            }
            return this.name + " " + this.lastName;
        }
    }
});

app.mount("#events");
