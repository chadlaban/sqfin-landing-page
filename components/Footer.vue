<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-logo">
        <a href="/" class="logo" aria-label="Company Logo">
          <NuxtImg
            src="/logos/squaredfinancial_logo_dark.png"
            alt="SquaredFinancial Logo"
          />
        </a>
        <span>© SquaredFinancial 2025. All rights reserved.</span>
      </div>

      <div class="footer-social">
        <span>Find us on</span>
        <ul>
          <li>
            <a href="#" aria-label="Facebook"
              ><NuxtImg
                src="/media-icons/fb-icon.png"
                alt="facebook-icon"
                class="media-icon"
            /></a>
          </li>
          <li>
            <a href="#" aria-label="X"
              ><NuxtImg
                src="/media-icons/x-icon.png"
                alt="x-icon"
                class="media-icon"
            /></a>
          </li>
          <li>
            <a href="#" aria-label="LinkedIn"
              ><NuxtImg
                src="/media-icons/linkedin-icon.png"
                alt="linkedin-icon"
                class="media-icon"
            /></a>
          </li>
          <li>
            <a href="#" aria-label="Instagram"
              ><NuxtImg
                src="/media-icons/insta-icon.png"
                alt="instagram-icon"
                class="media-icon"
            /></a>
          </li>
          <li>
            <a href="#" aria-label="Telegram"
              ><NuxtImg
                src="/media-icons/tg-icon.png"
                alt="telegram-icon"
                class="media-icon"
            /></a>
          </li>
          <li>
            <a href="#" aria-label="Youtube"
              ><NuxtImg
                src="/media-icons/youtube-icon.png"
                alt="youtube-icon"
                class="media-icon"
            /></a>
          </li>
        </ul>
      </div>

      <div class="footer-address">
        <span>6B Adeniyi Jones Ikeja, Lagos, Nigeria</span>
        <button>Contact Us</button>
      </div>
    </div>

    <hr />

    <div class="footer-disclaimer">
      <div class="disclaimer-section">
        <h4>Risk warning:</h4>
        <p>
          Trading leveraged products involve a significant risk and can result
          in the loss of your invested capital.
        </p>
      </div>

      <div class="disclaimer-section">
        <h4>Disclaimers:</h4>
        <p>
          The website is not intended to offer investment services to citizens
          of certain jurisdictions such as EU/EEA member states, UK, USA,
          Canada, Australia, New Zealand, FATF-listed countries including, among
          others, Iran, North Korea, and Myanmar (Burma). You must be 18 years
          old, or of legal age as determined in your country, in order to
          register for an account.
        </p>
      </div>

      <div class="disclaimer-section">
        <h4>Legal:</h4>
        <p>
          This website is operated by SQ Sey Ltd, a company authorised and
          regulated as a Securities Dealer by the Financial Services Authority
          of Seychelles with license number SD024. SQ Sey Ltd is part of the
          ‘SquaredFinancial’ group of companies which includes Squared Financial
          (CY) Limited, a Cyprus company authorised and regulated by the Cyprus
          Securities and Exchange Commission with license number 329/17.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="sass">
@use "@/assets/styles/variables"
@use "@/assets/styles/typography" as typography

.footer
  background-color: variables.$color-white
  @include typography.text-base
  padding: 2rem

  .footer-top
    display: grid
    grid-template-columns: 1fr
    gap: 2rem
    margin-bottom: 2rem

    @media (min-width: 768px)
      grid-template-columns: 1fr 1fr 1fr
      gap: 1.5rem

    .footer-logo
      display: flex
      flex-direction: column
      align-items: flex-start
      gap: 2rem

      img
        width: 271.16px
        height: 31px

      span
        color: variables.$color-gray

    .footer-social
      display: flex
      gap: 1rem

      span
        font-weight: 400

      ul
        display: flex
        gap: 1rem
        padding: 0
        list-style: none
        margin: 0

        li a img
          transition: transform 0.3s

          &:hover
            transform: scale(1.1)

    .footer-address
      display: flex
      flex-direction: column
      align-items: flex-end
      gap: 1.5rem

      button
        width: 119px
        height: 39px
        border-width: 1px
        border-radius: 3px
        color: variables.$color-crimson-pink
        border-color: variables.$color-crimson-pink
        background-color: transparent
        transition: background-color 0.3s, color 0.3s, border-color 0.3s
        @include typography.text-base

        &:hover
          background-color: variables.$color-crimson-pink
          color: variables.$color-white
          border-color: variables.$color-crimson-pink

  hr
    margin: 2rem 0
    opacity: 0.2
    border-color: variables.$color-light-gray

  .footer-disclaimer
    display: grid
    grid-template-columns: 1fr
    gap: 2rem

    @media (min-width: 768px)
      grid-template-columns: repeat(3, 1fr)

    .disclaimer-section
      h4
        font-weight: 400
        margin-bottom: 0.5rem

      p
        margin: 0
        color: variables.$color-gray
</style>
