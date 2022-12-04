<script setup lang="ts">
import router from '@/router';
import session from '../stores/session'
import Loading from '../components/Loading.vue'

  if (!session.user && session.loading == 0)
    router.push("/nouser");
</script>

<template>
  <main>
    <br>
    <article class="message" v-if="(session.loading == 0)">
      <div class="message-header">
        Welcome {{session.user?.name}}
      </div>
      <div class="message-body">
        Heyo!
      </div>
	</article>

  <Loading v-if="(session.loading > 0)"/>
  </main>
</template>