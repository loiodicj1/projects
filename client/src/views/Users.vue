<script setup lang="ts">
	import router from "@/router";
	import session, { logout } from '../stores/session'
  import { getUsers, dropUser, type User } from "@/stores/users";
  import { reactive } from "vue";
  import Loading from '../components/Loading.vue'

  const users = reactive([] as User[])

  function updateUsersList() {
    users.length = 0;
    getUsers().then( arr => users.push(...arr))
  }

  function deleteUser(user: string) {
    dropUser(user).then(result => {
      if (result) {
        if (user == session.user?.name) {
          logout()
          router.push('/')
        } else {
          updateUsersList()
        }
      }
    })
  }

  updateUsersList();
</script>

<template>
  <main> 
		<br>
    <button class="button" @click="updateUsersList()">
      <i class="fa-solid fa-arrows-rotate"></i>
		</button>
    <br>
		<table class="table is-striped" v-if="(session.loading == 0)">
      <thead>
        <tr>
          <th>Name</th>
          <th>Workouts</th>
          <th>Admin</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users">
          <th>{{user.name}}</th>
          <th>{{user.workouts?.length}}</th>
          <th> 
             <div v-if="user.admin">
                <i class="fas fa-check-square"></i>
            </div>
          </th>
          <th>
            <button class="button" @click="deleteUser(user.name)">
              <i class="fas fa-trash"></i>
            </button>
          </th>
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