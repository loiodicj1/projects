<script setup lang="ts">
	import router from '@/router'
	import session from '../stores/session'
	import {login} from '../stores/session'

</script>

<template>
  <main>
    <br>
		<article class="message">
			<div class="message-header">
				Log in
			</div>
			<div class="message-body">
				<button class="button is-outlined" @click="login('User')"> <strong>Log in</strong></button>    
				<br> 
				<button class="button is-outlined" @click="login('Admin'); router.push('/')"> <strong>Admin Log in </strong></button>     
			</div>
		</article>		
</main>
</template>