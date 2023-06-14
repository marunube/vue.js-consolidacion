<template>
  <div class="home">
    <h1> HOME </h1>
    
    <GameList></GameList>
  </div>
</template>

<script>
import GameList from '@/components/GameList.vue';

export default {
  name: 'HomeView',
  components: {
    GameList
  }
}


</script>
