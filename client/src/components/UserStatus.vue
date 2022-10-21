<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
		import { ref } from 'vue';

		let userListDropDownActive = ref(false)
</script>

<template>
    <div class="buttons" v-if="session.user == null">

			<div class="dropdown is-active is-right">
				<div class="dropdown-trigger">
					<button v-if="session.user == null" class="button" aria-haspopup="true" aria-controls="dropdown-menu3" @click="userListDropDownActive = !userListDropDownActive">
						<span>Log in</span>
					</button>
				</div>
				<div v-if="session.user == null" class="dropdown-menu" id="dropdown-menu3" role="menu" v-show="userListDropDownActive">
					<div class="dropdown-content">
						<div v-for="(user, i) in session.userlist"> <!--programmatically create list of users-->
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