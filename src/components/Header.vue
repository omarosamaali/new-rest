<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="ml-3 navbar-brand text-white" to="/HomeView">Restaurant</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/add">Add Restaurant</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to='/update/:id'>Update Restaurant</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" v-on:click="logout" to="#">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>

<script>
    export default {
        methods: {
          logout(){
            localStorage.clear();
            this.$router.push({name:'login'})
          }
        },
    }
</script>

<style scoped>
nav{
    height: 70px;
}
a{
    margin-left: 30px;
}
</style>