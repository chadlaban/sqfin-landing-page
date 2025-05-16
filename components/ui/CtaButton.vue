<template>
  <button
    class="cta-button"
    :class="{ fullWidth: fullWidth }"
    :style="customStyles"
  >
    <slot>Subscribe for our free webinar</slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  fullWidth?: boolean;
  bgColor?: string;
  textColor?: string;
  padding?: string;
}>();

const customStyles = {
  backgroundColor: props.bgColor || "#1DA584",
  color: props.textColor || "#FFFFFF",
  padding: props.padding || "24px 32px",
};
</script>

<style lang="sass" scoped>
@use "~/assets/styles/variables"
@use "~/assets/styles/typography" as typography
@use "sass:color"

.cta-button
  @include typography.text-2xl
  height: 77px
  border-radius: 3px
  border: none
  transition: background-color 0.3s

//   &:hover
//     background-color: var(--hover-color, #159D71)

  @media (max-width: 767px)
    @include typography.text-base
    width: fit-content

  @media (min-width: 768px)
    @include typography.text-lg
    padding: 20px 28px

  @media (min-width: 1024px)
    width: 417px
    padding: 24px 32px

.fullWidth
  width: 100%
</style>
