// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// Import Vue Disqus
import VueDisqus from 'vue-disqus'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueDisqus)

  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `Personal Blog by Umoren Samuel. 	I'm a frontend developer based in Uyo, Nigeria. I'm interested in web performance, accessibility and software engineering principles.`,
  })

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: `Personal Blog by Umoren Samuel. 	I'm a frontend developer based in Uyo, Nigeria. I'm interested in web performance, accessibility and software engineering principles.`,
  })

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    })
    next()
  })
}

