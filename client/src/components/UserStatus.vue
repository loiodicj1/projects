<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
	import { reactive, ref } from 'vue';
    import { getUsers, seedUsers, type User} from '@/stores/users';

    const users = reactive([] as User[])

    function updateUsersList() {
      users.length = 0;
      getUsers().then( arr => {
		if (arr.length > 0)
			users.push(...arr);
		else
			seedUsers().then(updateUsersList);
		})
    }

	let userListDropDownActive = ref(false)
</script>

<template>
	<div v-if="(session.loading == 0)">
		<div class="buttons" v-if="session.user == null">
				<div class="dropdown is-active is-right">
					<div class="dropdown-trigger">
						<button v-if="session.user == null" class="button" aria-haspopup="true" aria-controls="dropdown-menu3" @click="updateUsersList(); userListDropDownActive = !userListDropDownActive">
							<span>Log in</span>
						</button>
					</div>
					<div v-if="session.user == null" class="dropdown-menu" id="dropdown-menu3" role="menu" v-show="userListDropDownActive">
						<div class="dropdown-content">
							<div v-for="user in users.sort( (u0, u1) => {
								return u0.name.localeCompare(u1.name)
							})" :key="user.name"> <!--programmatically create list of users-->
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
	</div>

	<div v-if="(session.loading > 0)">
		<button class="button is-warning" @click="logout()">               
			<i class="fa-solid fa-loader">Loading</i>
		</button>
	</div>
</template>


<style scoped>
</style>