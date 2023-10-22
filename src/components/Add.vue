<template>
    <Header />

    <div>
      <h1>Hello, Welcome In Add Page</h1>
      <h2>Let's Add New Restaurant</h2>
    </div>
    <div class="form">
      <input type="text" placeholder="Restaurant Name" class="custom-input" v-model="resturant.name" />
      <input type="text" placeholder="Restaurant Address" class="custom-input" v-model="resturant.address" />
      <input type="text" placeholder="Restaurant Contact" class="custom-input" v-model="resturant.contact" />
      <button :disabled="isNoData" v-on:click="addRestaurant">Add Restaurant</button>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import axios from "axios";
  export default {
    data() {
      return {
        resturant: {
          name: "",
          address: "",
          contact: "",
        },
      };
    },
    components:{
        Header
    },
    methods: {
      async addRestaurant() {
        const result = await axios.post("http://localhost:3000/resturant", {
          name: this.resturant.name,
          address: this.resturant.address,
          contact: this.resturant.contact,
        });
        if (result.status == 201) {
          this.$router.push({ name: "home" });
        }
      },
    },
    computed: {
      isNoData() {
        return this.resturant.name.trim() === "" || this.resturant.address.trim() === "" || this.resturant.contact.trim() === "";
      },
    },
  };
  </script>
  
  <style scoped>
  h1 ,h2 {
    margin-top: 30px;
    text-align: center;
  }
  input:focus {
    outline: none;
  }
  .custom-input::placeholder {
    color: #999999;
    font-size: 14px;
    font-style: italic;
  }
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