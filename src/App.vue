<template>
  <div class="max-w-7xl mx-auto">
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <m-button>Test</m-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
});
</script>
