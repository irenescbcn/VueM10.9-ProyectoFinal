<template>
  <div class="home">
    <HomeComponent class="homeComponent"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'Home',
  components: {
    HomeComponent
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    
  }
  .home{
    height: 70vh;
  }
  .homeComponent{
    display:flex;
    align-items: center
  }
</style>
