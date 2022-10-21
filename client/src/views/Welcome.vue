<script setup lang="ts">
import router from '@/router';
import session from '../stores/session'

  if (!session.user)
    router.push("/nouser");
</script>

<template>
  <main>
    <br>
    <article class="message">
      <div class="message-header">
        Welcome {{session.user?.name}}
      </div>
      <div class="message-body">
        Heyo!
      </div>
	</article>
  </main>
</template>