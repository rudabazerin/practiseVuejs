<template>
  <div>
    <pre id="id">
            <input type="text" v-model="msg">
            {{ msg }}
            {{ reversedMessage }}
            A: <input type="text" v-model.lazy.number="a">
            B: <input type="number" v-model.lazy.number="b">
            <b> {{ computedProp }}</b>

        </pre>
    <div id="app-7">
      <ol>
       
        <todo-item
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
        ></todo-item>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 500,
      b: 500,
      msg: "Hello I am alex",
    };
  },
  computed: {
    computedProp: function () {
      return this.a / 2 + this.b / 2;
    },
    reverseMessage() {
      return this.msg.split("").reverse.join("");
    },
  },
  watch: {
    a: function () {},
    computedProp: function () {
      alert("Computed Value is different now");
    },
  },
};
</script>