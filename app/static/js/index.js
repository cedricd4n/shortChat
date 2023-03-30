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
      // votre tableau de nombres ici
    },
    mounted() {
        this.fetchData()
        setInterval(() => {
          this.fetchData()
        }, 60000) // 15 minutes = 900000 milliseconds
    },
    methods: {
       async fetchData() {
          // Fetch data from your server and update the 'data' property
          // This is just an example, replace it with your actual API call
            const currentTime = new Date().getTime()
            let fetchDataPromise = null
            
            
    
            if (currentTime % 30000 === 0) { 
                console.log("display data")
            } 
            else if (currentTime % 60000 === 0) { // Every 15 minutes
                const gResponse = await fetch(apiEndpoint + 'greeting');
                const gObject = await gResponse.json()
                this.numbers = gObject.greeting;
            }
         
        }
      }
    



    // created: async function() {
    //   // récupérez vos données depuis Flask avec fetch API
    //  const gResponse = await fetch(apiEndpoint + 'greeting');
    //  const gObject = await gResponse.json()
    //  this.numbers = gObject.greeting;
        // setTimeout(() => {
        // this.numbers = ['Veillez patienter...']; // affichez "Veillez patienter..." après 15 minutes
        // setTimeout  (async() => {
        //     // récupérez à nouveau vos données après 1 minute
        // const gResponse = await fetch(apiEndpoint + 'greeting');
        // const gObject = await gResponse.json()
        // this.numbers = gObject.greeting;
        // }, 60000);
        // }, 60000);
       
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
