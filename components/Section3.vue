<template>
  <section class="grid-section-3">
    <div class="grid-container-3">
      <div class="grid-item-3 left-column">
        <img :src="image" alt="seminar-imgs" class="left-image" />
        <p>
          <span>Temitope Ijibadejo</span><br />
          <span>18-year Forex trading expert</span>
        </p>
      </div>
      <div class="grid-item-3 right-column">
        <article>
          <h1>Meet your mentor</h1>
          <p>
            <strong>Temitope Ijibadejo</strong> is an exceptional instructor
            with proven experience in global financial markets. He is an
            authority in the online trading industry, having over 18 years of
            experience. He won the 'Best Forex Fund Manager award' at the Lagos
            Forex Expo and Awards 2013. He mentors many high-flyers in the
            business and has trained over 10,000 people in the past 13 years.
            Temitope is an industry veteran and consultant to global financial
            brands. 
          </p>
        </article>
        <div class="forex-award-container">
          <span>Award</span>
          <img :src="logo" alt="forex-award" />
        </div>
        <CtaButton bgColor="#1DA584" textColor="#FFFFFF" padding="20px 36px" />
      </div>
    </div>
  </section>
</template>

<script setup>
import image from "@/assets/images/sections/section3.png";
import logo from "@/assets/images/logos/best-forex-logo.png";
import CtaButton from "@/components/ui/CtaButton.vue";
</script>

<style scoped lang="sass">
@use "~/assets/styles/variables"
@use "~/assets/styles/typography" as typography
@use "sass:color"

.grid-section-3
  display: flex
  justify-content: center
  margin: 0rem 0rem 8rem 0rem

.grid-container-3
  display: grid
  gap: 1rem
  width: 100%

  @media (max-width: 767px)
    grid-template-columns: 1fr

  @media (min-width: 768px)
    grid-template-columns: 1fr

  @media (min-width: 1600px)
    grid-template-columns: 1fr 1fr

.grid-item-3
  display: flex
  flex-direction: column
  align-items: center
  justify-content: flex-start
  position: relative

  &.left-column
    align-items: flex-start

    p
      color: variables.$color-white
      position: absolute
      bottom: 150px
      left: 140px

    .left-image
      position: relative
      left: 0
      width: auto
      max-width: 100vw
      height: auto
      object-fit: cover

  p
    margin: 1rem

    @media (max-width: 767px)
      padding: 10px

    @media (min-width: 768px)
      padding: 1.5rem

    @media (min-width: 1024px)
      padding: 4rem

    span:first-child
      @include typography.text-4xl
      font-weight: 400
      font-size: 40px
      line-height: 123%
      letter-spacing: 0%

    span:last-child
      @include typography.text-2xl
      font-weight: 400
      font-size: 24px
      line-height: 100%
      letter-spacing: 0%

  img
    max-width: 100%
    height: auto

  &.right-column
    align-items: flex-start
    gap: 5rem

    @media (max-width: 767px)
      padding: 1rem 4rem
      margin: 2rem

    @media (min-width: 768px)
      padding: 1rem 4rem
      margin: 2rem

    @media (min-width: 1024px)
      padding: 60px 96px 0 0


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

    p
      padding: 0
      margin: 0
      font-weight: 400
      font-size: 24px
      line-height: 130%
      letter-spacing: -2%
      text-align: justify

    .cta-button
      &:hover
        background-color: color.adjust(variables.$color-ocean-green, $lightness: -10%) !important

    .forex-award-container
      @include typography.text-xl
      font-weight: 700
      display: flex
      align-items: center
      gap: 1rem

      img
        width: 95px
        height: 84px
</style>
