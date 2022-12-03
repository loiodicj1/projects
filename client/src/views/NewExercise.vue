<script setup lang="ts">
	import router from "@/router";
	import { ref } from "vue";
	//import session, {Workout} from '../stores/session'

	let name = ref("")
	let quantity = ref(0)
	let month = ref(1)
	let day = ref(1)



	function makeNewWorkout() {
		//@todo
	}
</script>

<template>
  <main> 
		<br>
		<article class="message">
			<div class="message-header">
				<p>New exercise</p>
			</div>
			<div class="message-body">
				<div class="field">
					<label class="label">Name</label>
					<div class="control">
						<input class="input" type="text" placeholder="Text input" v-model="name">
					</div>
				</div>

				<div class="field">
					<label class="label">Quantity</label>
					<div class="control">
						<input class="input" type="number" placeholder="Text input" v-model="quantity">
					</div>
				</div>

				<div class="field">
					<label class="label">Month</label>
					<div class="select">
						<select v-model="month">
							<option v-for="index in 12" :i = index> {{index}} </option>
						</select>
					</div>
				</div>

				<div class="field">
					<label class="label">Day</label>
					<div class="select">
						<select v-model="day">
							<option v-for="index in 28" :i = index> {{index}} </option>
						</select>
					</div>
				</div>

				<div class="field is-grouped">
					<div class="control">
						<button class="button is-dark" @click="
							//makeNewWorkout();
							router.push('/activity')
						">Log</button>
					</div>
					<div class="control">
						<button class="button is-light" @click="router.push('/activity')">Cancel</button>
					</div>
				</div>
			</div>
		</article>
  </main>
</template>