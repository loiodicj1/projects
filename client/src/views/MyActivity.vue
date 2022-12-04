<script setup lang="ts">
	import router from "@/router";
	import session from '../stores/session'
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
				</div>
				<div class="message-body">
					You did {{workout.quantity}} {{workout.name.toLowerCase()}}!
				</div>
			</article>
		</div>
  </main>
</template>