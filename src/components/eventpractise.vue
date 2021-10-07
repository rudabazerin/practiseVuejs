<template>
  <button v-on:click="warn('Form cannot be submitted yet.', $event)">
    Submiting
  </button>
</template>

<script>
export default {
  methods: {
    warn: function (message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
};
</script>