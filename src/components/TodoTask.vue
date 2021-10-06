<template>
  <div>
    <label for="Rice">Rice</label>
    <input type="checkbox" value="Rice" v-model="GroceryNames" />
    <br />
    <label for="Amounts">How many kg's to buy?</label>
    <br />
    <input type="radio" value="10 kg Rice" v-model="Amount" />
    <label for="one">10kg</label>
    <br />
    <input type="radio" value="20 kg Rice" v-model="Amount" />
    <label for="two">20kg</label>
    <br />
  <br>
    <label for="Lentils">Lentils</label>
    <input type="checkbox" value="Lentils" v-model="GroceryNames" />
    <br />
    <label for="Amounts">How many kg's to buy?</label>
    <br />
    <input type="radio" value="10 kg Lentils" v-model="Amount" />
    <label for="one">10kg</label>
    <br />
    <input type="radio" value="5kg lentils" v-model="Amount" />
    <label for="two">20kg</label>

    <br />
    <br>
    <label for="Vegetable">Vegetables</label>
    <input type="checkbox" value="Vegetables" v-model="GroceryNames" />
    <br>
    <label for="Amounts">How many kg's to buy?</label>
    <br>
    <input type="radio" value="10 kg Vege" v-model="Amount" />
    <label for="one">2kg</label>
    <br />
    <input type="radio"  value="5 kg Vege" v-model="Amount" />
    <label for="two">5kg</label>

    <br />
    <span>Grocery Names names: {{ GroceryNames }}</span>
    <br />
    <span>Amounts to buy: {{ Amount }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      GroceryNames: [],
      Amount: [],
    };
  },
};
</script>