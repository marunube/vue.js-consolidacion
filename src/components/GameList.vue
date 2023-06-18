<template>
<div class="container">
    <div class="list__btn">
    <button class="btn" @click="getGames">GET GAMES</button>
    </div>
    <div class="list__container">
    <div class="list__element" v-for="(game, index) in games" :key="index">
        <h3 class="list__title"  @click="goToGame(game.id)">{{game.name}}</h3>
        <img class="list__img" :src="game.background_image" @click="goToGame(game.id)" alt="" style="width: 200px">
        <a class="btn__secondary" :href="'/game/' + game.id + '/' ">Ingresar</a>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name:'GameList',
    data () {
        return {
            games: [],
        }
    },
    methods: {
        
        getGames: function() {
            var games = this.games;
            fetch('https://api.rawg.io/api/games?key=f9e4af7561084c47bdb1ca0fffb5c8a8')
                .then(function(response) {
                    return response.json();
                }).then(function(data) {
                    console.log(data.results)
                    data.results.forEach(function(game) {
                        var nuevo_juego = {
                            id: game.id,
                            name: game.name,
                            background_image: game.background_image
                        };
                        games.push(nuevo_juego);
                    })
                })
        },
        goToGame: function(id) {
            this.$router.push({ name: 'game', params: { id } })
        }
    }
}
</script>

<style>
.btn{
    border-radius: 0.3125rem;
    width: 6.25rem;
    height: 1.5625rem;
    background-color: grey;
    border: 0.125rem;
    cursor: pointer;
    
}

</style>