<template>
  <button
    type="button"
    class="inline-flex items-center font-medium border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[sizeClasses, typeClasses, roundedClasses]"
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
    rounded: {
      type: String,
      default: 'rounded',
      validator: (variant: string) => ['rounded', 'full'].includes(variant),
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
          return 'text-secondary-700 bg-secondary-100 hover:bg-secondary-200 focus:ring-secondary-500';
        case 'white':
          return 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500';
        default:
          return 'text-white bg-primary-500 hover:bg-primary-700 focus:ring-primary-500';
      }
    },
    roundedClasses(): string {
      switch (this.rounded) {
        case 'full':
          return 'rounded-full';
        default:
          return 'rounded-md';
      }
    },
  },
});
</script>

<style></style>
