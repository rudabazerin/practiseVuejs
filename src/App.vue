<template>
  <div>
     <h1> Welcome</h1>
     <newprac class="bazz boo"> </newprac>
     <!-- <signup> </signup>   -->
     <!-- <modal> </modal> -->
     <br>
     <todotask> </todotask>
  </div>
</template>

<script>
// import Modal from './components/modal.vue'
// import Signup from './components/signup.vue'
import Newprac from './components/newprac.vue'
import Todotask from './components/TodoTask.vue'

export default {
  name: 'App',
  components: {
    
    // Signup,
    Newprac,
    Todotask
  },
}
</script>

