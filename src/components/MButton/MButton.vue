<template>
  <button
    type="button"
    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'm-button',
  emits: ['click'],
});
</script>

<style></style>
