export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Nizar Baihaqi',
    title: 'Articles',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An article page from Nizar Baihaqi' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/0fcc578757.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    '~/assets/css/content.css',
    '~/assets/css/transition.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
  ],

  // Color mode
  colorMode: {
    classSuffix: ''
  },

  // Google fonts
  googleFonts: {
    families: {
      'Noto+Sans': {
        wght: [400, 700],
        ital: [400, 700]
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-seo-meta',
    '@nuxt/content'
  ],

  // Seo Meta
  seoMeta: {
    title: 'Nizar Baihaqi',
    defaultDescription: 'Hello, I’m Nizar Baihaqi from Indonesia. I am a Web Developer. I have experience at building website with Jamstack. 🛠️',
    defaultUrl: 'https://blog.nizarbaihaqi.com/',
    defaultImage: 'https://blog.nizarbaihaqi.com/banner/logo-dark-350x350-bg-transparent-1024x512.png',
    locale: 'en_US',
    siteName: 'Nizar Baihaqi',
    twitterUser: '@abaihaaqi'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-night-owl.css'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
