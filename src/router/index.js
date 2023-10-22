import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Add from '../components/Add.vue'
import Update from '../components/Update.vue'

const routes = [
  {
    path: '/HomeView',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },  {
    path: '/add',
    name: 'add',
    component: Add
  },  {
    path: '/update/:id',
    name: 'update',
    component: Update
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
