<template>
  <section class="grid-section-4">
    <div class="grid-container-4">
      <div class="grid-item filled">
        <h1>Unlock your future self after this webinar</h1>
        <ul>
          <li>Confident when approaching global markets.</li>
          <li>Disciplined when setting your trading plans.</li>
          <li>Strategic when seizing new market opportunities.</li>
          <li>
            Resilient when handling market volatility with strength and focus.
          </li>
        </ul>
      </div>
      <div class="grid-item filled">
        <h1>Capitalize on this webinars and...</h1>
        <ul>
          <li>Ask your questions to the host directly.</li>
          <li>Get answers on spot.</li>
          <li>Schedule a one-on-one session with the mentors.</li>
          <li>Interact with other participants.</li>
        </ul>
      </div>
      <div class="grid-item empty"></div>
      <div class="grid-item filled">
        <CtaButton bgColor="#1DA584" textColor="#FFFFFF" padding="20px 36px" />
      </div>
      <div class="grid-item empty"></div>
      <div class="grid-item empty"></div>
    </div>
  </section>
</template>

<script setup>
import CtaButton from "@/components/ui/CtaButton.vue";
import "@/assets/images/background/bd-section4.png";
import "@/assets/images/sections/section4.png";
</script>

<style scoped lang="sass">
@use "~/assets/styles/variables"
@use "~/assets/styles/typography" as typography
@use "sass:color"

.grid-section-4
  display: flex
  background-image: url("@/assets/images/background/bd-section4.png"), url("@/assets/images/sections/section4.png")
  background-position: center, right center, right center
  background-size: cover, auto, auto
  background-repeat: no-repeat, no-repeat, no-repeat
  margin-bottom: 0

.grid-container-4
  display: grid
  gap: 1rem
  width: 100%
  padding: 6rem 4rem

  @media (max-width: 767px)
    grid-template-columns: 1fr
    grid-template-rows: 1fr

  @media (min-width: 768px)
    grid-template-columns: 1fr
    grid-template-rows: 1fr

  @media (min-width: 1024px)
    grid-template-columns: repeat(auto-fit, minmax(300px, 517px))
    grid-template-rows: 1fr 80px

.grid-container-4 > *:nth-child(n+4)
  background: transparent
  backdrop-filter: blur(0px)
  -webkit-backdrop-filter: blur(0px)
  display: flex
  align-items: flex-start
  padding: 0
  margin-top: 2rem

.grid-item
  background-color: #f0f0f0
  border-radius: 0.5rem
  min-height: 150px
  display: flex
  align-items: center
  justify-content: center
  font-weight: bold
  font-size: 1.5rem

.filled
  flex-direction: column
  justify-content: flex-start
  background: rgba(255, 255, 255, 0.3)
  backdrop-filter: blur(10px)
  -webkit-backdrop-filter: blur(10px)
  border-radius: 12px
  padding: 0 3rem

  h1
    font-weight: 600
    font-size: 56px
    line-height: 110%
    letter-spacing: 0%
    background: linear-gradient(165deg,variables.$color-dark-blue 10%, variables.$color-razzmatazz 60%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    color: transparent

  ul
    font-weight: 600
    font-size: 28px
    line-height: 130%
    letter-spacing: 0%

    li
      margin-bottom: 1rem

  .cta-button
    &:hover
      background-color: color.adjust(variables.$color-ocean-green, $lightness: -10%) !important

@media (max-width: 768px)
  .grid-item.empty
    display: none

@media (min-width: 768px)
  .grid-item.empty
    display: none

@media (min-width: 1024px)
  .grid-item.empty
    visibility: hidden
    display: block
</style>
