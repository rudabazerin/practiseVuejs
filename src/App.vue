<template>
  <div>
     <h1> Welcome</h1>
     <newprac class="bazz boo"> </newprac>
     <!-- <signup> </signup>   -->
     <!-- <modal> </modal> -->
     <br>
     <pracarr> </pracarr>
     
     <br>
     <todotask> </todotask>
  </div>
</template>

<script>
// import Modal from './components/modal.vue'
// import Signup from './components/signup.vue'
import Newprac from './components/newprac.vue'
import Todotask from './components/TodoTask.vue'
import PracArr from './components/pracarr.vue'
export default {
  name: 'App',
  components: {
    
    // Signup,
    Newprac,
    Todotask,
    PracArr
  },
}
</script>

<style>
#app{
  background-color: rgb(181, 247, 247);
}

</style>