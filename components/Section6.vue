<!-- Section 6 includes sections 7 and 8 based from Figma design -->
<template>
  <section class="flex-section-6">
    <div class="about-sqfin-container">
      <section>
        <div>
          <h1>About</h1>
          <NuxtImg
            src="/logos/squaredfinancial-logo-dark-lg.png"
            alt="squared-financial-logo-dark"
          />
        </div>
        <div>
          <p>More than just a broker – A thriving community & learning hub</p>
          <h1>We help our traders thrive.</h1>
          <NuxtImg src="/sections/section6.png" alt="about-trading" />
          <CtaButton bgColor="#C30044" textColor="#FFFFFF" padding="20px 50px">
            Open Trading Account
          </CtaButton>
        </div>
      </section>
    </div>
    <div class="media-coverage-container">
      <h1>Expertise and coverage by global media</h1>
      <div class="media-logos">
        <NuxtImg
          src="/sections/media_coverage/Group_49.png"
          alt="media-coverage-logo-1"
        />
        <NuxtImg
          src="/sections/media_coverage/Group_50.png"
          alt="media-coverage-logo-2"
        />
        <NuxtImg
          src="/sections/media_coverage/Group_51.png"
          alt="media-coverage-logo-3"
        />
        <NuxtImg
          src="/sections/media_coverage/Group_52.png"
          alt="media-coverage-logo-4"
        />
        <NuxtImg
          src="/sections/media_coverage/Group_53.png"
          alt="media-coverage-logo-5"
        />
        <NuxtImg
          src="/sections/media_coverage/Group_54.png"
          alt="media-coverage-logo-6"
        />
        <NuxtImg
          src="/sections/media_coverage/Group_55.png"
          alt="media-coverage-logo-7"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CtaButton from "@/components/ui/CtaButton.vue";
</script>

<style scoped lang="sass">
@use "~/assets/styles/variables"
@use "~/assets/styles/typography" as typography
@use "sass:color"

.flex-section-6
  background-color: variables.$color-alt-light-gray

  h1
    max-width: 417px
    font-size: 56px
    font-weight: 600
    line-height: 110%
    letter-spacing: 0%
    background: linear-gradient(165deg, variables.$color-dark-blue 10%, variables.$color-razzmatazz 60%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    color: transparent

  .about-sqfin-container
    width: 100%
    display: flex
    flex-wrap: wrap
    gap: 2rem
    align-items: center
    justify-content: center
    text-align: center

    section
      display: flex
      flex-wrap: wrap
      gap: 2rem
      align-items: center
      justify-content: center
      padding: 4rem 0 0 0

      div:first-child
        display: flex
        flex-wrap: wrap
        align-items: center
        justify-content: center
        gap: 2rem

        h1
          margin: 0

      p
        max-width: 711px
        color: variables.$color-white
        font-weight: 400
        font-size: 36px
        line-height: 110%
        letter-spacing: 0%
        text-align: center

      div:last-child
        display: flex
        flex-direction: column
        flex-wrap: wrap
        align-items: center

        p, h1, .cta-button
          position: absolute

        p
          @media (max-width: 767px)
            margin: 38px 0 0 0
            @include typography.text-xl

          @media (min-width: 768px)
            margin: 50px 0 0 0
            font-size: 28px

          @media (min-width: 1024px)
            margin: 86px 0 0 0
            font-size: 36px

        h1
          max-width: 704px
          background: linear-gradient(160deg, variables.$color-white 8%, variables.$color-razzmatazz 70%)
          -webkit-background-clip: text
          -webkit-text-fill-color: transparent
          background-clip: text
          color: transparent

          @media (max-width: 767px)
            margin: 90px 0 0 0
            @include typography.text-3xl

          @media (min-width: 768px)
            margin: 150px 0 0 0
            @include typography.text-4xl

          @media (min-width: 1024px)
            margin: 220px 0 0 0
            font-size: 56px

        img
          display: block
          width: 100%
          height: auto

        .cta-button
          @media (max-width: 767px)
            height: 65px !important
            margin: 20rem 0 0 0

          @media (min-width: 768px)
            height: 65px !important
            margin: 30rem 0 0 0

          @media (min-width: 1024px)
            height: 70px !important
            margin: 56rem 0 0 0

          &:hover
              background-color: color.adjust(variables.$color-american-pink, $lightness: -10%) !important

  .media-coverage-container
    display: flex
    flex-direction: column
    gap: 1rem
    margin: 0 10rem 0 10rem
    padding: 0 0 7rem 0

    .media-logos
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      align-items: center

      img
        flex: 1 1 150px
        max-width: 147px
        height: auto
        transition: transform 0.3s ease

        &:hover
          transform: scale(1.05)
</style>
