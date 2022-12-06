<script setup lang="ts">
	import router from "@/router";
	import session from '../stores/session'
	import {dropWorkoutAtIndex, type Workout} from "../stores/workouts"

	function deleteWorkout(workout : Workout) {
		if (session.user) {
			const workouts = session.user.workouts
			let i = -1;
			let found = false;
			while (i < workouts.length && !found) {
				i++;
				const curr = workouts[i]
				if (curr.name == workout.name &&
					curr.quantity == workout.quantity &&
					curr.month == workout.month &&
					curr.day == workout.day &&
					curr.year == workout.year) {

					found = true;
				}
			}
			if (found) {
				session.user.workouts.splice(i)
				dropWorkoutAtIndex(session.user.name, i)
			}
		}
	}
</script>

<template>
  <main> 
		<br>
		<button class="button" @click="router.push('/newexercise')">
			<span>Log new exercise</span>
		</button>
		<div v-for="workout in session.user?.workouts.sort( (w0, w1) => {
			if (w0.month == w1.month)
                return w1?.day - w0.day;

            return w1.month - w0.month;})"> <!--programmatically create list of workouts-->
			<article class="message">
				<div class="message-header">
					{{workout.month}}/{{workout.day}}/{{workout.year}}
 					<button class="delete" aria-label="delete" @click="deleteWorkout(workout)"></button>				
				</div>
				<div class="message-body">
					You did {{workout.quantity}} {{workout.name.toLowerCase()}}!
				</div>

			</article>
		</div>
  </main>
</template>