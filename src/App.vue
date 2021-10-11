<template>
    <div class='home'>
  <!-- Practise of dynamic and async components -->
  <student> </student>
  </div>
  
</template>

<script>

import student from './components/student.vue'


export default {
  name: 'App',
  components: {

   student
   
  },
}
</script>

<style>
#app{
  background-color: rgb(181, 247, 247);
}

</style>