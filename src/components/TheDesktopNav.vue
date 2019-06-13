<template>
    <section class="nav">
        <div class="nav-logo">
            <router-link to="/"><img height="80px" src=@/assets/logo1.jpg alt="logo" class="nav-logo1"></router-link>
        </div>
        <div class="nav-menu">
            <ul class="nav-menu-list">
                <li class="nav-menu-items"><router-link to="/about" class="nav-menu-items">About me</router-link></li>
                <li class="nav-menu-items"><router-link to="/project" class="nav-menu-items">Projects</router-link></li>
                <li class="nav-menu-items"><router-link to="/blog" class="nav-menu-items">Blogs</router-link></li>
                <li class="nav-menu-items"><button value="refresh" onClick="window.location.reload();"><router-link to="/contact" class="nav-menu-items">Contact</router-link></button></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.nav
    position: fixed
    display: flex
    flex-direction: column
    align-items: center
    background: #333
    top: 0
    left: 0
    bottom: 0
    width: 15vw
    border-radius: 0 0 10px 0
    .nav-logo1
        margin: 75px auto
        border-radius: 100%
        border: 1px solid rgba(255,255,255,0.3)
        cursor: pointer
        transition: height 300ms ease-in-out
        &:hover
            height: 90px
    .nav-menu
        color: white

.nav-menu-list
    list-style: none
    padding: 0
    .nav-menu-items
        font-size: 15px
        font-family: montserrat, sans-serif
        background: none
        padding: 10px 10px
        text-align: center
        margin: 10px auto
        cursor: pointer
        transition: color 300ms ease-in-out
        color: white
        text-decoration: none
        &:hover
            color: rgba(255,255,255,0.3)
button
    background: none
    border: none
    text-decoration: none
</style>
