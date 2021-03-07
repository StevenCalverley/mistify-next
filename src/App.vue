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
        <h1 class="text-lg font-bold">Buttons</h1>
        <div class="mt-3 pt-4 border-t">
          <h2 class="font-semibold">Primary</h2>
          <div class="flex space-x-8 items-end">
            <m-button size="xs">Button Text</m-button>
            <m-button size="sm">Button Text</m-button>
            <m-button>Button Text</m-button>
            <m-button size="lg">Button Text</m-button>
            <m-button size="xl">Button Text</m-button>
          </div>
        </div>
        <div class="mt-4 pt-4 border-t">
          <h2 class="font-semibold">Secondary</h2>
          <div class="flex space-x-8 items-end">
            <m-button size="xs" type="secondary">Button Text</m-button>
            <m-button size="sm" type="secondary">Button Text</m-button>
            <m-button type="secondary">Button Text</m-button>
            <m-button size="lg" type="secondary">Button Text</m-button>
            <m-button size="xl" type="secondary">Button Text</m-button>
          </div>
        </div>
        <div class="mt-4 pt-4 border-t">
          <h2 class="font-semibold">White</h2>
          <div class="flex space-x-8 items-end">
            <m-button size="xs" type="white">Button Text</m-button>
            <m-button size="sm" type="white">Button Text</m-button>
            <m-button type="white">Button Text</m-button>
            <m-button size="lg" type="white">Button Text</m-button>
            <m-button size="xl" type="white">Button Text</m-button>
          </div>
        </div>
        <div class="mt-3 pt-4 border-t">
          <h2 class="font-semibold">Rounded Full</h2>
          <div class="flex space-x-8 items-end">
            <m-button size="xs" rounded="full">Button Text</m-button>
            <m-button size="sm" rounded="full">Button Text</m-button>
            <m-button rounded="full">Button Text</m-button>
            <m-button size="lg" rounded="full">Button Text</m-button>
            <m-button size="xl" rounded="full">Button Text</m-button>
          </div>
        </div>
        <div class="mt-3 pt-4 border-t">
          <h2 class="font-semibold">With Leading Icon</h2>
          <div class="flex space-x-8 items-end">
            <m-button size="sm">
              <svg
                class="-ml-0.5 mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              Button Text
            </m-button>
            <m-button>
              <svg
                class="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              Button Text
            </m-button>
            <m-button size="lg">
              <svg
                class="-ml-1 mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              Button Text
            </m-button>
            <m-button size="xl">
              <svg
                class="-ml-1 mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              Button Text
            </m-button>
          </div>
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
