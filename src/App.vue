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
      <section class="bg-white p-4 rounded">
        <h1 class="text-lg font-medium">Buttons</h1>
        <div class="flex space-x-8 items-end">
          <m-button type="xs">Button Text</m-button>
          <m-button type="sm">Button Text</m-button>
          <m-button>Button Text</m-button>
          <m-button type="lg">Button Text</m-button>
          <m-button type="xl">Button Text</m-button>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
