<template>
    <div class="content">
        <div class="content-title">
            <h1>Projects</h1>
        </div>
        <div class="project-content">
            <img src="@/assets/compass.jpg" class="image" />
            <div class="overlay">
                <router-link to="/Project_2" class="link"><p class="text">How I Learned Programming</p></router-link>
                <p class="text">02 June 2019</p>
            </div>
        </div>

        <div class="project-content">
            <img src="@/assets/tic-tac-toe.jpg" class="image" />
            <div class="overlay">
                <a class="link" href="https://zhuodannychen.github.io/Tic-Tac-Toe/"><p class="text">Tic-Tac-Toe</p></a>
                <p class="text">30 Apr 2018</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content {
    background: #333;
    padding: 3em;
    border-radius: 10px;
    color: rgb(210,210,210);
}
.content-title {
    background: #222;
    border-radius: 10px;
    padding: 10px 30px;
}
.project-content {
    display: inline-block;
    margin: 10px;
    position: relative;
    width: 45%;
    height: auto;
    border: 3px solid white;
}
.image {
    display: block;
    width: 100%;
    height: auto;
}
.overlay {
    position: absolute;
    top: 0;
    bottom: 100%;
    left: 0;
    right: 0;
    height: 0;
    width: 100%;
    overflow: hidden;
    opacity: 0.8;
    transition: .5s ease;
    background-color: #666;
    text-align: center;
}
.project-content:hover .overlay {
    bottom: 0;
    height: 100%;
}
.text {
    font-family: lato;
    font-size: 20px;
    text-align: center;
    padding: 5px;
}
.link {
    color: white;
    text-decoration: none;
}
@media (max-width:810px) {
  .text {
      font-size: 15px;
  }
}
@media (max-width:510px) {
  .text {
      font-size: 8px;
  }
}
.link:hover {
    color: rgb(37, 211, 241);
    text-decoration-line: underline;
}

</style>