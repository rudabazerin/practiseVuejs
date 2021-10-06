<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
    <p>Original message : {{ message }}</p>
    <p>Computed practise : {{ reverseMessage }}</p>
    <!-- V - model -->
    <input type="text" v-model="message" />
    <br />
    <br />

    <!-- <input type="text" placeholder="Input" :value="modalValue" /> -->

    <br />
    <!-- List Rendering -->
    <!-- <li v-for="n in evenNumbers" :key="numbers.value">{{ n }}</li>
    <li v-for="(item, index) in Students">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li> -->
   
    <!-- Array  mutation -->
    
   <br>
    <p class="foo bar">Hi</p>
    <!-- class binding with object syntex -->
    <button v-bind:class="computedObject">bindingWithobject</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Computed Message",
      items: [{ message: "Hello" }, { message: "Loop" }],
      isActive: true,
      error: null,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
      },
      
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
    evenNumbers() {
      return this.numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
  },
};
</script>