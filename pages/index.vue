<template>
  <Section1 />
  <Section2 />
  <Section3 />
  <Section4 />
  <div class="combined-section">
    <Section5 />
    <Section6 />
  </div>
  <Section9 />
</template>

<script setup>
useHead({
  title: "Squared Financial - Landing Page Technical",
  meta: [
    {
      name: "description",
      content: "This is a technical landing page test from SQ SEY Ltd.",
    },
    {
      property: "og:title",
      content: "Squared Financial - Landing Page Technical",
    },
    {
      property: "og:description",
      content: "This is a technical landing page test from SQ SEY Ltd.",
    },
    { property: "og:type", content: "website" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "canonical", href: "" }],
});
</script>

<style scoped lang="sass">
@use "~/assets/styles/variables"

.combined-section
  background-color: variables.$color-alt-light-gray
</style>
