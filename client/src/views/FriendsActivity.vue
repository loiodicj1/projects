<script setup lang="ts">
	import session from '../stores/session'
  import { getUsers, type User } from "@/stores/users";
  import type { Workout } from '@/stores/workouts';
  import { reactive } from 'vue';

  const workouts = reactive([] as Workout[])

  function updateWorkouts() {
    workouts.length = 0;
    getUsers().then( 
      arr => arr.forEach( (user) => {
        if (user.name != session.user?.name) {
          user.workouts.forEach( (workout) => {
            workout.user = user.name
            workouts.push(workout);
          })
        };
        workouts.sort( (w0, w1) => {
            if (w0.month == w1.month)
                return w1?.day - w0.day;

            return w1.month - w0.month;
        })
      })
    )
  }

  updateWorkouts();
</script>

<template>
  <main> 
		<br>
    <div v-for="workout in workouts"> 
      <article class="message">
        <div class="message-header">
          {{workout.month}}/{{workout.day}}/{{workout.year}}
        </div>
        <div class="message-body">
          {{workout.user}} did {{workout.quantity}} {{workout.name.toLowerCase()}}!
        </div>
      </article>
    </div>

    <Loading v-if="(session.loading > 0)"/>
  </main>
</template>