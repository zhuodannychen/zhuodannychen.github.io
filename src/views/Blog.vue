<template>
    <div class="content">
        <div class="content-title">
            <h1>Blogs</h1>
        </div>
        <div class="blog-content">
            <img src="@/assets/first.png" class="image" />
            <router-link to="/First_post" class="link"><p class="text">First Blog Post</p></router-link>
            <p class="text">05 June 2019</p>
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
.blog-content {
    display: inline-block;
    margin: 10px;
    position: relative;
    width: 45%;
    height: auto;
    border: 3px solid rgba(210,210,210,0.2);
    border-right: 3px solid white;
    border-bottom: 3px solid white;
    background: #222;
    border-radius: 10px;
}
.image {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
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