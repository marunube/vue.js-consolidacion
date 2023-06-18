<template>
<div id="game-alone" class="container">
    <div class="div" v-if="blog">
        <h1 class="title">{{blog.name}}</h1>
        <img class="img" :src="blog.background_image" alt="">
        <p class="rating" v-html="blog.rating"></p>
        <div class="description" v-html="blog.description" /> 
    </div>
</div>
</template>

<script>
export default {
name: "game-alone",
data() {
    return {
        id: this.$route.params.id,
        blog: null,
    };
    },
mounted() {
    var _this = this;
    fetch(
    'https://api.rawg.io/api/games/' + this.id + '?key=f9e4af7561084c47bdb1ca0fffb5c8a8'
    ).then(function(data) {
        return data.json();
    }).then(function(result){
        console.log (result);
        _this.blog = result;
    });
},
};
</script>

<style>
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}
.div{
    display: flex;
    flex-direction:column ;
    align-items: center;
    width: 31.25rem;

}
.img {
    width: 18.75rem;
}

</style>