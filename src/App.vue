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
      <ul class="font-bold flex space-x-4">
        <li
          v-for="tab in tabs"
          :key="tab"
          class="cursor-pointer px-2 py-1 border-b-4 border-transparent"
          @click="activeTab = tab"
          :class="{ 'border-blue-600': activeTab === tab }"
        >
          {{ tab }}
        </li>
      </ul>
      <component :is="activeTab" />
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
  data() {
    return {
      tabs: ['Buttons', 'Inputs'],
      activeTab: 'buttons',
    };
  },
});
</script>
