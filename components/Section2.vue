<template>
  <section class="grid-section-2">
    <div class="grid-container-2">
      <!-- top row -->
      <div class="grid-item-2 small">
        <p>Why Temitope is your ultimate mentor</p>
      </div>
      <div class="grid-item-2 medium">
        <p>
          SquaredFinancial’s Forex trading expert, <strong
            >Temitope Ijibadejo</strong
          >, uncovers new roads you can take to advance your trading skills.
          Join our trading webinar and unlock countless opportunities.
        </p>
        <img :src="image1" alt="shutterstock-image" class="bg-img" />
      </div>
      <!-- mid row -->
      <div class="grid-item-2 small item-facts">
        <img :src="icon1" alt="magnifying-glass-img" class="grid-item-2-icon" />
        <p>
          He goes beyond regular analysis and uncovers deep insights that others
          miss
        </p>
      </div>
      <div class="grid-item-2 small item-facts">
        <img :src="icon2" alt="stocks-img" class="grid-item-2-icon" />
        <p>
          He breaks down complex economic trends and gives actionable strategies
        </p>
      </div>
      <div class="grid-item-2 small item-facts">
        <img :src="icon3" alt="star-img" class="grid-item-2-icon" />
        <p>
          He is a trusted voice in the region and provides an in-depth outlook
          on top financial media
        </p>
      </div>
      <!-- bottom row -->
      <div class="grid-item-2 small item-facts">
        <img :src="icon4" alt="arrow-img" class="grid-item-2-icon" />
        <p>
          He is focused on customized performance and results and empowers
          traders with efficient techniques
        </p>
      </div>
      <div class="grid-item-2 small" id="special-item">
        <p>Take the next step and reserve your spot today</p>
      </div>
      <div class="grid-item-2 small">
        <img :src="image2" alt="phone-image" />
        <CtaButton bgColor="#1DA584" textColor="#FFFFFF" padding="20px 36px" />
      </div>
    </div>
  </section>
</template>

<script setup>
import image1 from "@/assets/images/background/shutterstock_section2.png";
import image2 from "@/assets/images/background/phone_section2.png";
import icon1 from "@/assets/images/section-icons/box3.png";
import icon2 from "@/assets/images/section-icons/box4.png";
import icon3 from "@/assets/images/section-icons/box5.png";
import icon4 from "@/assets/images/section-icons/box6.png";
import CtaButton from "@/components/ui/CtaButton.vue";
</script>

<style scoped lang="sass">
@use "~/assets/styles/variables"
@use "~/assets/styles/typography" as typography
@use "sass:color"

.grid-section-2
  display: flex
  justify-content: center

.grid-container-2
  display: grid
  gap: 1rem
  width: 100%

  div:first-child
    display: flex
    align-items: center
    justify-content: center
    padding: 0 4rem
    color: variables.$color-white
    font-size: 56px
    font-weight: 600
    line-height: 120%
    background: linear-gradient(20deg,variables.$color-american-pink 20%, variables.$color-razzmatazz 70%)

  div:last-child
    background-color: variables.$color-white

    img
      position: absolute
      right: 0

      @media (max-width: 767px)
        width: 550px

      @media (min-width: 768px)
        width: 444px

      @media (min-width: 1024px)
        width: 480px

      @media (min-width: 1420px)
        width: 640px

    .cta-button
      position: relative
      padding: 8px 16px !important
      height: 60px

      @media (max-width: 767px)
        left: 224px
        top: 188px

      @media (min-width: 768px)
        left: 114px
        top: 148px

      @media (min-width: 1024px)
        left: 0px
        top: 180px

      @media (min-width: 1420px)
        left: 115px
        top: 244px

      &:hover
        background-color: color.adjust(variables.$color-ocean-green, $lightness: -10%) !important

  @media (max-width: 767px)
    padding: 0 0 0 1rem
    display: flex
    flex-direction: column

  @media (min-width: 768px)
    padding: 2rem
    margin: 2rem
    grid-template-columns: repeat(2, 1fr)

  @media (min-width: 1024px)
    padding: 2rem
    margin: 6rem
    grid-template-columns: repeat(3, 1fr)

.grid-item-2
  background-color: variables.$color-alt-light-gray
  border-radius: 12px
  height: 400px

  @media (max-width: 767px)
    margin: 0rem 1rem

  &.large
    grid-column: span 3

  &.medium
    display: flex
    align-items: center
    flex-direction: row
    grid-column: span 2
    overflow: hidden

    p
      @include typography.text-2xl
      line-height: 130%
      letter-spacing: 0
      font-weight: 400

      @media (max-width: 767px)
        padding: 10px
        margin: 12px

      @media (min-width: 768px)
        padding: 1.5rem
        margin: 26px

      @media (min-width: 1024px)
        padding: 4rem
        margin: 36px

    img
      margin-top: 2rem

  &.small
    grid-column: span 1

.item-facts
  display: flex
  flex-direction: column
  justify-content: center
  font-weight: 700
  font-size: 28px
  line-height: 100%
  letter-spacing: 0%

  img
    width: 65px
    height: 70px

  @media (max-width: 767px)
    padding: 0 4rem

  @media (min-width: 768px)
    padding: 0 2rem

  @media (min-width: 1024px)
    padding: 0 4rem


#special-item
  display: flex
  align-items: center

  p
    height: 72px
    padding: 2rem
    font-weight: 700
    font-size: 36px
    line-height: 34px
    letter-spacing: 0%
    background: linear-gradient(20deg, variables.$color-american-pink 20%, variables.$color-razzmatazz 70%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    color: transparent
</style>
