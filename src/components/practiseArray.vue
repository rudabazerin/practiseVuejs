<template>
  <div>
    {{itemlists.length}}
    <button :click="addRow">Click Here to add</button>
    <button :click="removeRow(2)">Click Here to remove</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "practiseArray",
      row: [],
      count: 0,
      itemlists: [
        { name: "Shirt", description: "Silk", price: "2000" },
        { name: "Sharee", description: "Silk", price: "4000" },
        { name: "Shoe", description: "Leather", price: "6000" },
        { name: "Shoe", description: "Leather", price: "6000" },
      ],
    };
  },
  methods: {
    addRow() {
      return this.row.push({
        name: "Shirt",
        description: "Silk",
        price: "2000",
      });
    },
    removeRow(index){
      return this.itemlists.splice(index, 1)
    }
  },
};
</script>