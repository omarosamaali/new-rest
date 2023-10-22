<template>
    <img class="logo" src="../assets/restaurant-logo-design-(1)-template-b9bd726f6bee3380567f1c9b63a8c99b_screen.jpg" />
    <h1>Login Up Form :</h1>
    <div class="form">
        <input type="text" v-model="email" placeholder="Enter Email" class="custom-input">
        <input type="password" v-model="password" placeholder="Enter Password" class="custom-input">
        <button v-on:click="signUpBtn" :disabled="isNoData">Login</button>
        <p>
            <router-link to="/">Create new acccount</router-link>
          </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed:{
    isNoData(){
        return this.email.trim() === '' || this.password === '';
    }
  },
  methods: {
    async signUpBtn() {
      let result = await axios.get(
        `http://localhost:3000/user?email${this.email}&password=${this.password}`
      )
      if (result.status == 200 && result.data.length>0) {
            localStorage.setItem("user-info", JSON.stringify(result.data[0]));
            this.$router.push({name:'home'});
          }
    }
  },
}
</script>

<style scoped>
input:focus {
    outline: none;
  }
  .custom-input::placeholder {
    color: #999999;
    font-size: 14px;
    font-style: italic;
  }
  
body{
    background-color: aliceblue;
    margin-top: 60px;
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
p a {
  color: white;
  text-decoration: none;
  display: flex;
  margin-top: 4px;
}
h1{
  text-align: center;
}
button:hover{
  background-color: rgb(99, 99, 99);
  border: none;
}
.logo {
  width: 130px;
  margin: 0 auto; /* Add this line to center the image horizontally */
  display: flex;
  margin-top: 60px;

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
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>