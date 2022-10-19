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

        <router-link class="navbar-item has-text-white" to="/recent">
          Recent
        </router-link>

        <router-link class="navbar-item has-text-white" to="/add">
          Add
        </router-link>

        <router-link class="navbar-item has-text-white" to="/edit">
          Edit
        </router-link>

        <router-link class="navbar-item has-text-white" to="/friends">
          Friends
        </router-link>

        <router-link class="navbar-item has-text-white" to="/stats">
          Stats
        </router-link>

        <router-link class="navbar-item has-text-white" to="/admin">
          Admin
        </router-link>
      </div>
    </div>
  </nav>
</template>