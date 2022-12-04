<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import UserStatus from './UserStatus.vue';
    import session from '../stores/session'

</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-start">
        <router-link class="navbar-item has-text-white" to= "/">
          Home
        </router-link>

        <router-link v-if="session.user != null" class="navbar-item has-text-white" to="/activity">
          My Activity
        </router-link>

        <router-link v-if="session.user != null" class="navbar-item has-text-white" to="/friends">
          Friends Activity
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a v-if="session.user?.admin == true" class="navbar-link has-text-warning">
            Admin
          </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item has-text-dark" to="/users">
              Users
            </router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <UserStatus/>
      </div>
    </div>
  </nav>
</template>