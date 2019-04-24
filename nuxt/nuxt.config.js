module.exports = {
  mode: 'spa',
  // modules: ['nuxt-sass-resources-loader', [
  //   '~/assets/main.scss'
  // ]],
  css: [
    { src: '~/assets/main.scss', lang: 'scss' }
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  workbox: {
    dev: true, // enable run on dec
  }
}