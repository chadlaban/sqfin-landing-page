<template>
  <section class="flex-section-5">
    <div class="left-column-5">
      <h1>Proven by trader success stories</h1>
      <div>
        <CtaButton bgColor="#1DA584" textColor="#FFFFFF" padding="20px 40px">
          Reserve your spot now
        </CtaButton>
      </div>
    </div>
    <div class="right-column-5">
      <img :src="imageReview1" alt="trader-review-1" />
      <img :src="imageReview2" alt="trader-review-2" />
      <img :src="imageReview3" alt="trader-review-3" />
      <img :src="imageReview4" alt="trader-review-4" />
      <img :src="imageReview5" alt="trader-review-5" />
    </div>
  </section>
</template>

<script setup>
import CtaButton from "@/components/ui/CtaButton.vue";
import "@/assets/images/background/vector-bg.png";
import imageReview1 from "@/assets/images/sections/reviews/Group_18.png";
import imageReview2 from "@/assets/images/sections/reviews/Group_43.png";
import imageReview3 from "@/assets/images/sections/reviews/Group_44.png";
import imageReview4 from "@/assets/images/sections/reviews/Group_45.png";
import imageReview5 from "@/assets/images/sections/reviews/Group_46.png";
</script>

<style scoped lang="sass">
@use "~/assets/styles/variables"
@use "~/assets/styles/typography" as typography
@use "sass:color"

.flex-section-5
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: center
  gap: 1rem
  background-image: url("@/assets/images/background/vector-bg.png")
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  padding: 2rem 2rem 10rem 2rem
  margin-bottom: 0

  .left-column-5
    display: flex
    flex-direction: column
    align-items: center
    margin: 0 4rem

    h1
      max-width: 417px
      font-weight: 600
      font-size: 56px
      line-height: 110%
      letter-spacing: 0%
      background: linear-gradient(165deg, variables.$color-dark-blue 10%, variables.$color-razzmatazz 60%)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      background-clip: text
      color: transparent

    div
      width: fit-content
      padding: 1rem
      background-color: variables.$color-alt-light-gray

      .cta-button
        &:hover
          background-color: color.adjust(variables.$color-ocean-green, $lightness: -10%) !important

  .right-column-5
    position: relative
    width: 100%
    max-width: 60%
    aspect-ratio: 1
    margin: 0 auto

    img
      position: absolute
      object-fit: cover
      transition: transform 0.3s, box-shadow 0.3s

      // image distribution
      @media (max-width: 768px)
        &:nth-child(1)
          top: 74%
          left: 0%
          transform: scale(0.4)

        &:nth-child(2)
          top: 50%
          left: -26%
          transform: scale(0.4)

        &:nth-child(3)
          top: 0%
          right: 35%
          z-index: 2
          transform: scale(0.4)

        &:nth-child(4)
          top: 28%
          left: 20%
          transform: scale(0.4)

        &:nth-child(5)
          top: -5%
          left: -4%
          transform: scale(0.4)

        &:hover
          transform: scale(0.6) !important
          z-index: 4

      @media (min-width: 768px)
        &:nth-child(1)
          top: 70%
          left: 27%
          transform: scale(0.6)

        &:nth-child(2)
          top: 46%
          left: -16%
          transform: scale(0.6)

        &:nth-child(3)
          top: 0%
          right: 55%
          z-index: 2
          transform: scale(0.6)

        &:nth-child(4)
          top: 28%
          left: 20%
          transform: scale(0.6)

        &:nth-child(5)
          top: -5%
          left: 22%
          transform: scale(0.6)

        &:hover
          transform: scale(0.8) !important
          z-index: 4

      @media (min-width: 1024px)
        &:nth-child(1)
          top: 77%
          left: 27%
          transform: scale(0.8)

        &:nth-child(2)
          top: 55%
          left: 0%
          transform: scale(0.8)

        &:nth-child(3)
          top: 23%
          right: 55%
          z-index: 2
          transform: scale(0.8)

        &:nth-child(4)
          top: 16%
          left: 45%
          transform: scale(0.8)

        &:nth-child(5)
          top: 50%
          left: 40%
          transform: scale(1.1)

        &:hover
          transform: scale(1) !important
          z-index: 4
</style>
