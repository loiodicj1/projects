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

		<!--
			Was going to use this as a username and password input but could not get it to work

		<div class="columns">
			<div class="column">
				<article class="message">
					<div class="message-header">
						Log in
					</div>
					<div class="column is-half">
						<input class="input" type="text" placeholder="Username" id="username">
						<input class="input" type="text" placeholder="Password" id="password">
						<button class="button is-outlined" @click=""><strong>Log in</strong></button>     
					</div>
				</article>
			</div>
			<div class="column">
				<article class="message">
					<div class="message-header">
						Log in information
					</div>
					<table class="table is-fullwidth is-bordered is-striped">
						
						<thead>
							<tr>
								<th>Name</th>
								<th>Password</th>
								<th>Admin</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<th>User</th>
								<th>pass123</th>
								<th>No</th>
							</tr>
							<tr>
								<th>Admin</th>
								<th>superpass123</th>
								<th>Yes</th>
							</tr>
						</tbody>
					</table>
				</article>
			</div>
		</div>
	-->
</main>
</template>