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

        <router-link class="navbar-item has-text-white" to="/about">
          About
        </router-link>
      </div>
    </div>
  </nav>
</template>