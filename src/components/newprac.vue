<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
    <p>Original message : {{ message }}</p>
    <p>Computed practise : {{ reverseMessage }}</p>
    <!-- V -model -->
    <input type="text" placeholder="Input" :value='modalValue'>

    
    <input type="text" v-model="message"> <br>
    <br>
    <!-- V-model Modifiers -->
    <label for="jack">Jack</label>

    <input type="checkbox" id="jack" value="Jack" v-model.trim="checkedNames">

    <label for="john">John</label>

    <input type="checkbox" id="john" value="John" v-model.trim="checkedNames">
     <br>
    <span>Checked names: {{ checkedNames }}</span>


    <p class="foo bar">Hi</p>
    <!-- class binding with object syntex -->
    <button v-bind:class="computedObject">bindingWithobject</button>
    
    <!--  -->
  </div>
</template>

<script>
import modalVue from './modal.vue';
export default {
  data() {
    return {
      message: "Hello Computed Message",
      items: [{ message: "Hello" }, { message: "Loop" }],
      isActive: true,
      error: null,
      checkedNames: [],
      props: {
          modalValue: String,
      }
    };
  },
  computed: {
    reverseMessage() {
      return this.message.split("").reverse().join("");
    },
    computedObject() {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal",
      };
    },
  },
};
</script>