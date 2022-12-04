<script setup lang="ts">
	import router from "@/router";
	import session from '../stores/session'
  import { getUsers, type User } from "@/stores/users";
  import { reactive } from "vue";
  import Loading from '../components/Loading.vue'

  const users = reactive([] as User[])

  function updateUsersList() {
    users.length = 0;
    console.log('updating users')
    getUsers().then( x=> users.push(...x))
  }

  updateUsersList();
</script>

<template>
  <main> 
		<br>
		<table class="table is-striped" v-if="(session.loading == 0)">
      <thead>
        <tr>
          <th>Name</th>
          <th>Admin</th>
          <th>Workouts</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users">
          <th>{{user.name}}</th>
          <th>{{user.admin}}</th>
          <th>{{user.workouts?.length}}</th>
        </tr>
      </tbody>
    </table>

    <Loading v-if="(session.loading > 0)"/>

    <br>

    <button class="button" @click="router.push('/newuser')">
			New user
		</button>
  </main>
</template>