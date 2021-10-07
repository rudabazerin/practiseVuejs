<template>
  <div>
     <h1> Welcome</h1>
     <br>
     <br>
     <student> </student>
     

  </div>
</template>

<script>

import Student from './components/student.vue'
export default {
  name: 'App',
  components: {
   Student
  },
}
</script>

<style>
#app{
  background-color: rgb(181, 247, 247);
}

</style>