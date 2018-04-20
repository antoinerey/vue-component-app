module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        console.log(JSON.stringify(config, null, 4))

        config.module.rules[1].exclude = (modulePath) => {
          if (modulePath.includes('@antoine')) {
            console.log(modulePath)
          }

          return /node_modules/.test(modulePath)
        }
      }
    }
  },
}
