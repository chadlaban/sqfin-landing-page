<template>
  <Section1 class="fade-section" />
  <Section2 class="fade-section" />
  <Section3 class="fade-section" />
  <Section4 class="fade-section" />
  <div class="combined-section">
    <Section5 class="fade-section" />
    <Section6 class="fade-section" />
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

onMounted(() => {
  const observer = new IntersectionObserver(
    (sections) => {
      sections.forEach((section) => {
        section.isIntersecting
          ? section.target.classList.add("fade-effect")
          : section.target.classList.remove("fade-effect");
      });
    },
    {
      threshold: 0.2,
    }
  );

  document
    .querySelectorAll(".fade-section")
    .forEach((section) => observer.observe(section));
});
</script>

<style scoped lang="sass">
@use "~/assets/styles/variables"

.fade-section
  opacity: 0
  transform: translateY(20px)
  transition: opacity 0.8s ease, transform 0.8s ease

.fade-effect
  opacity: 1
  transform: translateY(0)

.combined-section
  background-color: variables.$color-alt-light-gray
</style>
