
module.exports = {
  server: {
    port: process.env.PORT || 3200, // default: 3000  6000 端口不能用 可能被占用了 
  },
  mode:  'universal',  // 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/css/app.scss',
    '@/css/iconfont.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios',
    '@/plugins/element-ui',
    '@/plugins/vue-notifications',
    '@/plugins/vue-rx.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  router: {
    middleware: 'stats'
  },
  axios: {
    // proxyHeaders: false
    proxy: true // Can be also an object with default options
  },
  // proxy: {
  //   '/api/': { target: 'http://127.0.0.1:3001', pathRewrite: {'^/api/': '/'} } ,
  // },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/,'vue-notifications'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
