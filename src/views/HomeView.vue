<template>
  <Header />
  <div class="home">
    <h1>Hello, <span>{{ name }}</span> From Home Page</h1>
    <table class="table table-striped table-dark " border="1">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Contact</th>
          <th scope="col">Delete</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in resturant" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.contact }}</td>
          <td><button class="del-btn" v-on:click="deleteTd(item.id)">Delete</button></td>
          <td class="update-btn"><router-link class="update--btn" :to="'/update/' + item.id">Update</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    Header
  },
  data() {
    return {
      name: '',
      resturant: []
    }
  },
  methods:{
    async deleteTd(id){
      // this.resturant.splice(index,1)
      let result = await axios.delete("http://localhost:3000/resturant/"+id);
      if(result.status == 200){
        this.loadData()
      }
    },
    async loadData(){
      let user =localStorage.getItem('user-info');
      this.name =JSON.parse(user).name;
      if(!user){
        this.$router.push({ name: 'signup' })
      }
      let result = await axios.get("http://localhost:3000/resturant");
    this.resturant = result.data

    }
  },
  async mounted() {
this.loadData() 
 }
}
</script>
<style scoped>
table {
  margin: 20px auto;
  width: 738px;
}

.update-btn {
  margin-top: 12px;
  /* Add margin to move the button down */
}

.update--btn:hover {
  background-color: #04d904;
}

.update--btn {
  background-color: #00a400;
  border-radius: 5px;
  padding: 4px;
  color: white;
  text-decoration: none;
  display: inline-block;
  /* Add this line to make the link inline-block */
}

.del-btn {
  background-color: #e80000;
  border-radius: 5px;
  padding: 4px;
  color: white;
  text-decoration: none;
  border: none;
}

.del-btn:hover {
  background-color: #fc2121;
}

h1 {
  text-align: center;
  margin-top: 60px;
}

span {
  color: rgb(143, 0, 179);
  font-style: italic;
  font-weight: bold;
}
</style>
