const app = Vue.createApp({
    data() {
        return {
            name: 'Dat',
            age: 25,
            url: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
        }
    },
    methods: {
        agePlusFive(){
            return this.name + 5
        },
        randomNumber(){
            return Math.random();
        }
    },
})
app.mount("#assignment");
