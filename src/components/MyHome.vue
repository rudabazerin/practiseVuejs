// Dynamic and async component topic
<template>
  <div class="home">
    <h3>MyHome is here</h3>

    <!-- One component is imported into another component -->
    <button @click="show= !show">Show List</button>
    <div v-if='show'>
        <List> </List>

    </div>
  </div>
</template>

<script>
import LoadingComponent from './LoadingComponent.vue'
import ErrorComponent from './ErrorComponent.vue'

 const List = () =>({
     components: import('./List'),
     loading: LoadingComponent,
     error: ErrorComponent,
     timeout: 1000,
 })



export default {
  components: {
    List
    },
  data(){
      return{
          show: false
      }
  }
};
</script>

<style scoped>
.home {
  border: 1px red solid;
  text-align: center;
  margin-top: 50px;
}
</style>