// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["@nuxt/image-edge"],
  image: {
    domains: [],
    vercel: {
      basePath: "/_next/image",
      quality: 75,
      formats: ["image/avif", "image/webp"],
    },
  },
  app: {
    head: {
      // fonts are referenced from https://fonts.google.com/selection/embed
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },
      ],
    },
  },
  css: [
    "@/assets/styles/main.sass"
  ]
})
