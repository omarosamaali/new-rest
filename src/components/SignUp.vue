<template>
    <img class="logo" src="../assets/restaurant-logo-design-(1)-template-b9bd726f6bee3380567f1c9b63a8c99b_screen.jpg" />
    <h1>Sign Up Form :</h1>
    <div class="form">
      <input type="text" v-model="name" placeholder="Enter Name" class="custom-input">
      <input type="text" v-model="email" placeholder="Enter Email" class="custom-input">
      <input type="password" v-model="password" placeholder="Enter Password"  class="custom-input">
      <button v-on:click="signUpBtn" :disabled="isFormEmpty">Sign Up</button>
      <p>
        <router-link to="/login">Already Have Account..? Login</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'SignUp',
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    computed: {
      isFormEmpty() {
        return this.name.trim() === '' || this.email.trim() === '' || this.password === '';
      }
    },
    methods: {
      async signUpBtn() {
        try {
          let result = await axios.post("http://localhost:3000/user", {
            name: this.name,
            email: this.email,
            password: this.password
          });
          if (result.status == 201) {
            localStorage.setItem("user-info", JSON.stringify(result.data));
            this.$router.push({name:'login'});
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      if(user){
        this.$router.push({name: 'signup'});
      }
    }
  }
  </script>

<style scoped>
.custom-input::-webkit-inner-spin-button,
.custom-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}   
body{
    background-color: aliceblue;
    text-align: center;
    margin-top: 50px;
}
p{
    background-color: #00a400;
    border-radius: 6px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    height: 36px;
    padding: 0 32px;
}
h1{
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
  
p a {
    color: white;
    text-decoration: none;
    display: flex;
    margin-top: 4px;
}
p:hover{
    background-color: #2cdd2c;
}
.logo {
  width: 130px;
  margin: 0 auto; /* Add this line to center the image horizontally */
  display: flex;
  margin-top: 50px;

}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px; /* Optional: Adjust the margin-top value as needed */
}
input {
    height: 47px;
    width: 317px;
    margin-bottom: 18px;
    border-radius: 12px;
    border: 1px solid #cdd1d6;

}
button{
    height: 33px;
    width: 100px;
    border-radius: 17px;
    color: white;
    background-color: black;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;
}
button:hover{
    background-color: rgb(99, 99, 99);
    border: none;
}
</style>