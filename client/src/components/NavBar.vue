<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-start">
        <router-link class="navbar-item has-text-white" to= "/">
          Home
        </router-link>

        <router-link class="navbar-item has-text-white" to="/activity">
          My Activity
        </router-link>

        <router-link class="navbar-item has-text-white" to="/stats">
          Statistics
        </router-link>

        <router-link class="navbar-item has-text-white" to="/friends">
          Friends Activity
        </router-link>

        <router-link class="navbar-item has-text-white" to="/people">
          People
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Admin
          </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item has-text-dark" to="/users">
              Users
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>