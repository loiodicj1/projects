<script setup lang="ts">
import router from '@/router';
import session from '../stores/session'
import { getUsers, seedUsers, type User } from "@/stores/users";

router.push('/welcome')
</script>

<template>
  <main>
    <br>
      You should not see this message
  </main>
</template>