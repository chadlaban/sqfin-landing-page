<template>
  <section class="featured-section">
    <div class="content">
      <img :src="Logo" alt="SqFin Logo" class="logo" />
      <article>
        <div class="intro-container">
          <h1 class="title">FOREX MASTERY WEBINAR</h1>
          <p class="intro-text">
            Start your journey to become a seasoned trader
          </p>
        </div>

        <div class="date-text">
          <span>Save the date</span>
          <p class="day-month">13 MAY</p>
          <p class="time">8:00 PM</p>
          <img :src="zoomIcon" alt="Icon" class="icon" />
        </div>
      </article>
      <CtaButton bgColor="#1DA584" textColor="#FFFFFF" padding="20px 28px" />
    </div>

    <div class="background">
      <img :src="BackgroundImage" alt="Background Image" />
      <div class="bottom-text-section">
        <p class="upper-text">
          <span>Join the Best Traders and Investors.</span><br />
          <span>Key secrets unveiled</span>
        </p>
        <hr />
        <div class="lower-text">
          <p>
            <span>Unique discussion by trading</span><br />
            <span>specialist Temitope Ijibadejo</span>
          </p>
          <p>
            <span>Get real-time</span><br />
            <span>information</span>
          </p>
          <p>
            <span>Access to community</span><br />
            <span>and support from experts</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Logo from "@/assets/images/logos/squaredfinancial_logo_light.png";
import zoomIcon from "@/assets/images/media-icons/zoom-icon.png";
import BackgroundImage from "@/assets/images/background/featured-bg.png";
import CtaButton from "@/components/ui/CtaButton.vue";
</script>

<style scoped lang="sass">
@use "~/assets/styles/variables"
@use "~/assets/styles/typography" as typography
@use "sass:color"

.featured-section
  display: flex
  flex-direction: column
  color: variables.$color-white
  overflow-x: hidden

  @media (min-width: 768px)
    flex-direction: row

  .content
    background-color: variables.$color-black
    padding: 0 0 0 8rem
    display: flex
    flex-direction: column
    justify-content: space-evenly
    width: -webkit-fill-available

    @media (max-width: 767px)
      padding: 2rem

    @media (min-width: 768px)
      width: 35%
      padding: 2rem 0 2rem 2rem

    @media (min-width: 1024px)
      width: 40%
      padding: 6rem 0 6rem 6rem

    article
      display: flex
      flex-direction: column
      gap: 2rem

    .logo
      margin-bottom: 1rem

      @media (max-width: 767px)
        width: 349.9px
        height: 40px

      @media (min-width: 768px)
        width: 227.9px
        height: 27px

      @media (min-width: 1024px)
        width: 349.9px
        height: 40px

    .intro-container
      display: flex
      flex-direction: column
      gap: 8px

    .title
      margin: 0
      font-weight: 800
      line-height: 110%
      background: linear-gradient(200deg,rgba(255, 255, 255, 1) 10%, rgba(207, 50, 105, 0.8) 100%)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent

      @media (max-width: 767px)
        font-size: 58px

      @media (min-width: 768px)
        @include typography.text-4xl

      @media (min-width: 1024px)
        font-size: 58px

    .intro-text
      margin: 0
      font-weight: 400
      line-height: 120%
      vertical-align: middle

      @media (max-width: 767px)
        font-size: 36px

      @media (min-width: 768px)
        @include typography.text-2xl

      @media (min-width: 1024px)
        font-size: 36px

    .date-text
      display: flex
      flex-direction: column
      gap: 2px

      span
        @include typography.text-xl
        font-weight: 400

      p
        margin: 0

      .day-month
        @include typography.text-5xl
        font-weight: 500

      .time
        font-size: 28px
        font-weight: 300

      .icon
        margin: 1rem 0
        width: 96.42px
        height: 35px

    .cta-button
      &:hover
        background-color: color.adjust(variables.$color-ocean-green, $lightness: -10%) !important

  .background
    width: 100vw
    height: 100vh
    position: relative
    overflow: hidden
    // background: linear-gradient(45deg,rgba(0, 0, 0, 0.3) 65%, rgba(207, 50, 105, 0.9) 100%)

    // gradient overlay
    &:before
      content: ""
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      z-index: 1
      width: 100%
      height: 100%

      @media (max-width: 767px)
        background: linear-gradient(180deg,variables.$color-black 5%, rgba(255, 255, 255, 0) 16%)

      @media (min-width: 768px)
        background: linear-gradient(90deg,variables.$color-black 5%, rgba(255, 255, 255, 0) 16%)

    img
      width: 100%
      height: 100%
      object-fit: cover
      position: absolute
      top: 0
      left: 0
      z-index: 0

    .bottom-text-section
      position: absolute
      bottom: 92px
      left: 6rem
      z-index: 2
      color: variables.$color-white

      .upper-text
        @include typography.text-2xl

        span:last-child
          font-weight: 600

        @media (max-width: 767px)
          margin-left: -4rem

        @media (min-width: 768px)
          margin: 0

        @media (min-width: 1024px)
          margin: 0

      hr
        border: 0
        height: 4px
        background-image: linear-gradient(90deg,variables.$color-deep-blue 0%, variables.$color-crimson-pink 100%)

        @media (max-width: 767px)
          margin-left: -4rem
          width: 386px

        @media (min-width: 768px)
          margin: 1rem 0 0 0
          width: 386px

        @media (min-width: 1490px)
          margin: 1rem 0 0 0
          width: 920px

      .lower-text
        @include typography.text-xl
        display: flex
        justify-content: space-between

        @media (max-width: 767px)
          flex-direction: column
          margin-left: -4rem

        @media (min-width: 768px)
          flex-direction: column
          margin: 0

        @media (min-width: 1490px)
          flex-direction: row
          margin: 0
</style>
