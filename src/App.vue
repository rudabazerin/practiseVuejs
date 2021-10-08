<template>
    <div class="home">
  <!-- Practise of dynamic and async components -->
     <MyHome> </MyHome>

  </div>
  
</template>

<script>
import MyHome from './components/MyHome'
export default {
  name: 'App',
  components: {
    
    MyHome,
   
  },
}
</script>

<style>
#app{
  background-color: rgb(181, 247, 247);
}

</style>