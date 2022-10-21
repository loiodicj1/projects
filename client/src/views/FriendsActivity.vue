<script setup lang="ts">
	import session from '../stores/session'
</script>

<template>
  <main> 
		<br>
    <div v-for="(user, i) in session.userlist"> 
      <div v-if="user.name != session.user?.name" v-for="(workout, i) in user?.workouts"> <!--programmatically create list of workouts-->
        <article class="message">
          <div class="message-header">
            {{workout.month}}/{{workout.day}}/{{workout.year}}
          </div>
          <div class="message-body">
            {{user.name}} did {{workout.quantity}} {{workout.name.toLowerCase()}}!
          </div>
        </article>
      </div>
    </div>
  </main>
</template>