import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About.vue'
import Blog from '@/views/Blog.vue'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Project from '@/views/Project.vue'
import Project_2 from '@/views/side_projects/how_I_learned_programming.vue'
import First_post from '@/views/blogs/first_post.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/project_2',
      name: 'project_2',
      component: Project_2
    },
    {
      path: '/first_post',
      name: 'first_post',
      component: First_post
    }
  ]
})
