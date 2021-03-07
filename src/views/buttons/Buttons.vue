<template>
  <section class="bg-white p-4 rounded">
    <h1 class="text-lg font-bold">Buttons</h1>
    <buttons-primary></buttons-primary>
    <buttons-secondary></buttons-secondary>
    <buttons-white></buttons-white>
    <buttons-rounded-full></buttons-rounded-full>
    <buttons-with-leading-icon></buttons-with-leading-icon>
    <buttons-with-trailing-icon></buttons-with-trailing-icon>
    <!-- <buttons-circular></buttons-circular> -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonsCircular from './components/ButtonsCircular.vue';
import ButtonsPrimary from './components/ButtonsPrimary.vue';
import ButtonsRoundedFull from './components/ButtonsRoundedFull.vue';
import ButtonsSecondary from './components/ButtonsSecondary.vue';
import ButtonsWhite from './components/ButtonsWhite.vue';
import ButtonsWithLeadingIcon from './components/ButtonsWithLeadingIcon.vue';
import ButtonsWithTrailingIcon from './components/ButtonsWithTrailingIcon.vue';

export default defineComponent({
  name: 'buttons',
  components: {
    ButtonsPrimary,
    ButtonsSecondary,
    ButtonsWhite,
    ButtonsRoundedFull,
    ButtonsWithLeadingIcon,
    ButtonsWithTrailingIcon,
    ButtonsCircular,
  },
});
</script>
