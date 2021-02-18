import Vue from 'vue'
import Router from 'vue-router'
import ContentIndex from '@/components/ContentIndex'
import Content from '@/components/Content'
import Profile from '@/components/Profile'

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
