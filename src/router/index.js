import Vue from 'vue'
import Router from 'vue-router'
import ContentIndex from '@/pages/ContentIndex'
import Content from '@/pages/Content'
import Profile from '@/pages/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentIndex',
      component: ContentIndex
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
