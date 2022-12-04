<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
	import { reactive, ref } from 'vue';
    import { getUsers, type User} from '@/stores/users';

    const users = reactive([] as User[])

    function updateUsersList() {
      users.length = 0;
      getUsers().then( x=> users.push(...x))
    }

		let userListDropDownActive = ref(false)
</script>

<template>
    <div class="buttons" v-if="session.user == null">

			<div class="dropdown is-active is-right">
				<div class="dropdown-trigger">
					<button v-if="session.user == null" class="button" aria-haspopup="true" aria-controls="dropdown-menu3" @click="updateUsersList(); userListDropDownActive = !userListDropDownActive">
						<span>Log in</span>
					</button>
				</div>
				<div v-if="session.user == null" class="dropdown-menu" id="dropdown-menu3" role="menu" v-show="userListDropDownActive">
					<div class="dropdown-content">
						<div v-for="user in users" :key="user.name"> <!--programmatically create list of users-->
							<a href="#" class="dropdown-item" @click="userListDropDownActive = !userListDropDownActive; login(user.name)">
								{{user.name}}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    <div class="buttons" v-else>
			<a class="button is-danger" @click="logout()">
        Log out
      </a>
    </div>
</template>


<style scoped>
</style>