const app = Vue.createApp({
   data(){
      return {
         selectedA: false,
         selectedB: false,
         selectedC: false
      }
   },
   computed: {
      selectedAToggle(){
         return {
            active: this.selectedA
         }
      }
   },
   methods: {
      changeSelect(type){
         switch(type){
            case 'A':
               this.selectedA = !this.selectedA;
               break;
            case 'B':
               this.selectedB = !this.selectedB;
               break;
            case 'C':
               this.selectedC = !this.selectedC;
               break;
         }
      }
   }
})
app.mount("#styling");
