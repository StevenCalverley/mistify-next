<template>
  <button
    type="button"
    class="inline-flex items-center font-medium border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[sizeClasses, typeClasses]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'm-button',
  emits: ['click'],
  props: {
    size: {
      type: String,
      default: 'base',
      validator: (size: string) =>
        ['xs', 'sm', 'base', 'lg', 'xl'].includes(size),
    },
    type: {
      type: String,
      default: 'primary',
      validator: (type: string) =>
        ['primary', 'secondary', 'white'].includes(type),
    },
  },
  computed: {
    sizeClasses(): string {
      switch (this.size) {
        case 'xs':
          return 'px-2.5 py-1.5 text-xs';
        case 'sm':
          return 'px-3 py-2 text-sm leading-4';
        case 'lg':
          return 'px-4 py-2 text-base';
        case 'xl':
          return 'px-6 py-3 text-base';
        default:
          return 'px-4 py-2 text-sm';
      }
    },
    typeClasses(): string {
      switch (this.type) {
        case 'secondary':
          return 'text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500';
        case 'white':
          return 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500';
        default:
          return 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';
      }
    },
  },
});
</script>

<style></style>
