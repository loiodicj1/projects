import { createRouter, createWebHistory } from 'vue-router'
import session from '../stores/session'
import HomeView from '../views/HomeView.vue'
import NoUser from '../views/NoUser.vue'
import LogIn from '../views/LogIn.vue'
import Welcome from '../views/Welcome.vue'
import MyActivity from '../views/MyActivity.vue'
import FriendsActivity from '../views/FriendsActivity.vue'
import NewExercise from '../views/NewExercise.vue'
import Users from '../views/Users.vue'
import NewUser from '../views/NewUser.vue'
import Stats from '../views/Stats.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/nouser',
      name: 'nouser',
      component: NoUser,
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/activity',
      name: 'activity',
      component: MyActivity,
    },
    {
      path: '/newexercise',
      name: 'newexercise',
      component: NewExercise,
    },
    {
      path: '/friends',
      name: 'friends',
      component: FriendsActivity,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/newuser',
      name: 'newuser',
      component: NewUser,
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats,
    },
  ]
})

export default router
