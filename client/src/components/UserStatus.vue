<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <a class="button is-light" @click="login('User')">
            Log in
        </a>
				<a class="button is-warning" @click="login('Admin')">
            Log in admin
        </a>
    </div>
    <div class="buttons" v-else>
			<a class="button is-danger" @click="logout()">
        Log out
      </a>
    </div>

</template>


<style scoped>
</style>