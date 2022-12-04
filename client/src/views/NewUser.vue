<script setup lang="ts">
	import router from "@/router";
	import { ref } from "vue";
	import { newUser } from "@/stores/users";

	let name = ref("")
	let admin = ref(false)

	function makeNewUser() {
		newUser(name.value, admin.value)
	}
</script>

<template>
  <main> 
		<br>
		<article class="message">
			<div class="message-header">
				<p>New user</p>
			</div>
			<div class="message-body">
				<div class="field">
					<label class="label">Name</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input" v-model="name">
					</div>
				</div>

				<div class="field">
					<label class="checkbox">
						<input type="checkbox" v-model="admin">
						<strong> Admin</strong>
					</label>
				</div>

				<div class="field is-grouped">
					<div class="control">
						<button class="button is-dark" @click="
							makeNewUser();
							router.push('/')
						">Create</button>
					</div>
					<div class="control">
						<button class="button is-light" @click="router.push('/users')">Cancel</button>
					</div>
				</div>
			</div>
		</article>
  </main>
</template>