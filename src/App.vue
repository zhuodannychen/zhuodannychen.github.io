<template>
  <div id="app">
    <the-desktop-nav id='desktop-nav'/>
    <the-mobile-nav id='mobile-nav'/>
    <div class="view-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheDesktopNav from '@/components/TheDesktopNav'
import TheMobileNav from '@/components/TheMobileNav'

export default {
  components: {
    'the-desktop-nav': TheDesktopNav,
    'the-mobile-nav':TheMobileNav
  }
}
</script>

<style lang="sass" scoped>
.view-container
  width: 85vw
  padding-left: 35px
  padding-top: 10px
  margin-right: 10px
  margin-left: 13vw
  box-sizing: border-box
  min-height: 100vh

#mobile-nav
  display: none

@media screen and (max-width: 810px)
  #desktop-nav
    display: none
  .view-container
    width: 100%
    margin-left: 0
  #mobile-nav
    display: flex
</style>
