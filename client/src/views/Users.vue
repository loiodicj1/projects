<script setup lang="ts">
	import router from "@/router";
	import session from '../stores/session'
</script>

<template>
  <main> 
		<br>
		<table class="table is-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Password</th>
          <th>Admin</th>
          <th>Workouts</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in session.userlist">
          <th>{{user.name}}</th>
          <th>{{user.pass}}</th>
          <th>{{user.admin}}</th>
          <th>{{user.workouts?.length}}</th>
        </tr>
      </tbody>
    </table>

    <button class="button" @click="router.push('/newuser')">
			New user
		</button>
  </main>
</template>