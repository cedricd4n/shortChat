const apiEndpoint = '/api_v1/';

// const vm = new Vue({
//     el: '#vm',
//     delimiters: ['[[', ']]'],
//     data: {
//         title:{ }
//     },
//     created: async function(){
//         const gResponse = await fetch(apiEndpoint + 'greeting');
        
//         const gObject = await gResponse.json();
//         this.title = gObject.greeting;
//         console.log(this.title)
//     }
// })
const app = new Vue({
    el: '#vm',
    delimiters: ['[[', ']]'],
    data: {
      numbers: [],
      showWait:false, // votre tableau de nombres ici
    },
    created() {
        this.fetchValues();
        setInterval(this.fetchValues, 15 * 60 * 1000); // appel toutes les 15 min
    },
    methods: {
      async  fetchValues() {
        const gResponse = await fetch(apiEndpoint + 'greeting');
        const gObject = await gResponse.json()
        this.numbers = gObject.greeting;
        this.showWait = false;

        this.showWait = true;
        setTimeout(() => {
            this.showWait = false;
        }, 60 * 1000); 

      },
      

    },



    // created: async function() {
    //   // récupérez vos données depuis Flask avec fetch API
    //  const gResponse = await fetch(apiEndpoint + 'greeting');
    //  const gObject = await gResponse.json()
    //  this.numbers = gObject.greeting;
    //     setTimeout(() => {
    //     this.numbers = ['Veillez patienter...']; // affichez "Veillez patienter..." après 15 minutes
    //     setTimeout  (async() => {
    //         // récupérez à nouveau vos données après 1 minute
    //     const gResponse = await fetch(apiEndpoint + 'greeting');
    //     const gObject = await gResponse.json()
    //     this.numbers = gObject.greeting;
    //     }, 60000);
    //     }, 60000);
       
    // }
});
// var example1 = new Vue({
//     el: '#example-1',
   
//     data() {
//         return {
//           title: ['name','sort','company']
//         }
//     }
   
// })

// import axios from 'axios';

// export default {
//   data() {
//     return {
//       items: [],
//     };
//   },
//   created() {
    // axios.get('/greeting')
    //   .then(response => {
    //     this.items = response.data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
//   },
// };
