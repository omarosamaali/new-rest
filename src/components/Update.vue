<template>
    <Header />
    <div>
      <h1>Hello, User From Update Page</h1>
    </div>
    <div class="form">
      <input type="text" placeholder="Restaurant Name" class="custom-input" v-model="resturant.name" />
      <input type="text" placeholder="Restaurant Address" class="custom-input" v-model="resturant.address" />
      <input type="text" placeholder="Restaurant Contact" class="custom-input" v-model="resturant.contact" />
      <button :disabled="isNoData" v-on:click="UpdateBtn">Update Restaurant</button>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        resturant: {
          name: '',
          address: '',
          contact: '',
        },
      };
    },
    components: {
      Header,
    },
    methods: {
      async UpdateBtn() {
        let result = await axios.put (
          "http://localhost:3000/resturant/"+this.$route.params.id,{
            name: this.resturant.name,
            address: this.resturant.address,
            contact: this.resturant.contact,
          });
          if(result.status==200){
            this.$router.push({name:'home'})
          }
      }
    },
    async mounted() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({ name: 'signup' });
      }
      const result = await axios.get('http://localhost:3000/resturant/'+this.$route.params.id);
      console.log(result.data);
      this.resturant = result.data;
    },
  };
  </script>
  
  <style scoped>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  input {
    height: 47px;
    width: 317px;
    margin-bottom: 28px;
    border-radius: 12px;
    border: 1px solid #cdd1d6;
  }
  h1 {
    margin-top: 60px;
    text-align: center;
  }
  span {
    color: rgb(143, 0, 179);
    font-style: italic;
    font-weight: bold;
  }
  button {
    background-color: #00a400;
    border-radius: 6px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    height: 36px;
    padding: 0 32px;
    border: none;
    width: 320px;
    height: 39px;
  }
  button:hover {
    background-color: rgb(99, 99, 99);
    border: none;
  }
  </style>