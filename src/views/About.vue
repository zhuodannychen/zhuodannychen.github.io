<template>
    <div class="about-card">
        <div class="about-title">
            <img height=100px src=../assets/profile_square-ConvertImage.jpg alt="avatar" class="avatar">
            <div class="title-text-content">
                <p>About me</p>
                <h2>Danny Chen</h2>
            </div>
        </div>
        <div class="card-content">
            <p>Hi, my name is Danny Chen, and I'm a student at Plano West Senior High</p>
            <p>I'm very passionate about learning, teaching, and just creating things in general (like this website).
                I started programming with the FLL challenges by using simple block commands, and soon,
                everything has progressed into Html, CSS, Vue Js, Java, Python, Codequest, USACO, Machine Learning, and Pytorch.
            </p>
            <p>Other than programming, I also enjoy break dancing and solving the Rubik's Cube, with a personal
                best time of 14.68 seconds and average of around 22 seconds.
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'about'
}
</script>
>
<style lang="sass" scoped>
.about-card
    background: #333
    padding: 3em
    border-radius: 10px
    color: white
    .about-title
        height: 150px
        background: #222
        border-radius: 10px
        align-items: center
        display: flex
        .avatar
            border-radius: 50%
            border: 3px solid rgba(255,255,255,0.1)
            float: right
            margin: 0 30px
    .title-text-content
        p
            margin-bottom: 0
            color: rgb(210,210,210)
        h2
            margin-top: 0
.card-content p
    font-size: 15px;
    margin: 30px auto
    padding: 2px;
    line-height: 30px;
    color: rgb(210,210,210)
</style>
