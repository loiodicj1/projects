<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import session from '../stores/session'
import { addWorkout, createDesc } from "../stores/workouts"
let name = ref("")
let quantity = ref(0)
let month = ref(1)
let day = ref(1)
let desc = ref("")


function makeNewWorkout() {
	const newWorkout = {
		"name": name.value
		, "quantity": quantity.value
		, "month": month.value
		, "day": day.value
		, "year": 2022
		, "desc": desc.value
	}

	session.user?.workouts.push(newWorkout)
	addWorkout(session.user?.name, newWorkout)
}

async function generateDesc() {
	const description = await createDesc(name.value);
	desc.value = description;
	return description;
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
					<label class="label">Description</label>
					<div class="control is-expanded">
						<input class="input" type="text" placeholder="Text input" v-model="desc">
					</div>
					<p class="control">
						<a class="button is-warning" @click="generateDesc()">
							Generate
						</a>
					</p>
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
							<option v-for="index in 12" :i=index> {{ index }} </option>
						</select>
					</div>
				</div>

				<div class="field">
					<label class="label">Day</label>
					<div class="select">
						<select v-model="day">
							<option v-for="index in 28" :i=index> {{ index }} </option>
						</select>
					</div>
				</div>

				<div class="field is-grouped">
					<div class="control">
						<button class="button is-dark" @click="
	makeNewWorkout();
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