<template>
  <section class="awards-section">
    <div class="upper-content">
      <p>
        <span>Don’t just take our word for it</span><br /><br />
        <span>Internationally awarded for excellence</span>
      </p>
      <CtaButton bgColor="#C30044" textColor="#FFFFFF" padding="20px 50px">
        Open Trading Account
      </CtaButton>
    </div>
    <div class="lower-content">
      <img :src="award1" alt="pan-finance-award-1" class="award-img" />
      <img :src="award2" alt="pan-finance-award-2" class="award-img" />
      <img :src="award3" alt="pan-finance-award-3" class="award-img" />
      <img :src="award4" alt="pan-finance-award-4" class="award-img" />
      <img :src="award5" alt="pan-finance-award-5" class="award-img" />
    </div>
  </section>
  <section class="cta-section">
    <p>Take the next step and reserve your spot today</p>
    <CtaButton bgColor="#1CBE8E" textColor="#FFFFFF" padding="20px 50px">
      Reserve your spot now
    </CtaButton>
  </section>
</template>

<script setup>
import CtaButton from "@/components/ui/CtaButton.vue";
import award1 from "@/assets/images/sections/pan-finance-award-1.png";
import award2 from "@/assets/images/sections/pan-finance-award-2.png";
import award3 from "@/assets/images/sections/pan-finance-award-3.png";
import award4 from "@/assets/images/sections/pan-finance-award-4.png";
import award5 from "@/assets/images/sections/pan-finance-award-5.png";
</script>

<style scoped lang="sass">
@use "~/assets/styles/variables"
@use "~/assets/styles/typography" as typography
@use "sass:color"

.awards-section
  display: flex
  flex-direction: column
  margin: 4rem 6rem

  .upper-content
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    gap: 1rem

    p
      max-width: 493px

    span:first-child
      font-weight: 600
      font-size: 56px
      line-height: 110%
      letter-spacing: 0%
      background: linear-gradient(165deg,variables.$color-dark-blue 10%, variables.$color-razzmatazz 60%)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      background-clip: text
      color: transparent

    span:last-child
      margin-top: 1rem
      font-weight: 300
      font-size: 24px
      line-height: 100%

  .cta-button
    &:hover
        background-color: color.adjust(variables.$color-american-pink, $lightness: -10%) !important

  .lower-content
    display: flex
    align-items: center
    justify-content: space-between
    flex-wrap: wrap
    gap: 1rem 2rem
    margin: 3rem 0 0 0
    max-width: 100%

    .award-img
      width: calc(20% - 1rem)
      flex-grow: 1
      flex-shrink: 0
      max-width: 211px
      margin: 0 0.5rem

    @media (max-width: 767px)
      .award-img
        width: calc(50% - 1rem)

    @media (max-width: 1024px)
      .award-img
        width: calc(33.33% - 1rem)

.cta-section
  display: flex
  justify-content: space-between
  align-items: center
  flex-wrap: wrap
  margin: 4rem 6rem
  padding: 1rem 2rem
  background: linear-gradient(164deg,rgba(255, 148, 148, 1) 10%, rgba(207, 50, 105, 1) 55%)
  border-radius: 12px

  p
    color: variables.$color-white
    font-weight: 600
    font-size: 58px
    line-height: 105%
    max-width: 889px
    margin: 20px 10px

  .cta-button
    &:hover
        background-color: color.adjust(variables.$color-ocean-green, $lightness: -10%) !important
</style>
