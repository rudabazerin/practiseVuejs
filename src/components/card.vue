<template>
    <div>
        <div class="card">
            <div class="card-title">
                Apple
            </div>
            <div class="card-body">
                <p>Counting Number of Apples</p>
            </div>
            <div class="row">
                <div class="cell">
                    <label>Quantity:</label>
                </div>
                <div class="cell">
                    <input type="number" v-model="inventory.apple">
                </div>
                <div class="card-footer">
                    <button class="btn btn-success" @click='addToCart(intentory.apple)'>Add to card</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'card',
    data(){
        return {
            inventory: {
                apple:0
            },
            cart:{
                apple:0,
            }
        }

    },
    methods: {
        addToCart(Quantity){
            // receive type and number
            this.cart += Quantity;
        }
    }
}
</script>