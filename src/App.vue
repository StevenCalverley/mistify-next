<template>
  <header class="p-4 bg-blue-600 text-blue-100">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-lg font-medium">Misitfy Components</h1>
      <p class="text-sm">
        An opinionated implementaion of Tailwind UI Components.
      </p>
    </div>
  </header>
  <main class="mt-4">
    <div class="max-w-7xl mx-auto">
      <buttons />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Buttons from './views/buttons/Buttons.vue';

export default defineComponent({
  name: 'App',
  components: {
    Buttons,
  },
});
</script>
