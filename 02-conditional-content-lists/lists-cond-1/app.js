const app = Vue.createApp({
    data(){
        return {
            enteredValues: '',
            listGoal: []
        }
    },
    methods: {
        addGoal(){
            this.listGoal.push(this.enteredValues);
            this.enteredValues = '';
        },
        remove(index){
            this.listGoal.splice(index, 1);
        }
    },
});

app.mount("#user-goals");
