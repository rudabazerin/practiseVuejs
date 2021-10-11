<template>
    <div class="home">
        <transition name='List'>
            <List v-if="showList"> </List>
        </transition>
    </div>
</template>

<script>
import List from './List'
export default {
    components:{
        List
    },
    data(){
        return {
            showList: true,
        }
    }
}
</script>

<style scoped>
/* Enter classes */

.List-enter-from{
    opacity: 0;
    transform: translateY(-60px)
}
.List-enter-to{
    opacity: 1;
    transform: translateY(0);
}
.List-enter-active{
    transition: all 0.3 ease;
}
/* Leave classes */
.List-leave-from{
     opacity: 1;
    transform: translateY(0);
}
.List-leave-to{
        opacity: 0;
    transform: translateY(-60px)
}
.List-enter-active{
     transition: all 0.3 ease;
   
}
</style>