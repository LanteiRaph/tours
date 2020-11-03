/* eslint-disable no-trailing-spaces */
<template>
<div class="container">
    <div class="left_panel">
        <Table v-if="cartMode !== 'planned'" :adventures="adventures"/>
        <Itinerary v-else/>
        <!-- <div class="empty" v-if="length === 0">
          Busket Is empty, Please make a booking
          <router-link to="/plan">
            <button>
              Make A booking
            </button>
          </router-link>
        </div> -->
    </div>
    <div class="right_panel" >
        <div>
        <h2>Payment Options</h2>
          <div >
            <div>
                <label for="M-pesa">Mpesa</label>
                <input type="radio" name="payment"/>
            </div>
            <div>
            <label for="M-pesa">Paypal</label>
            <input type="radio" name="payment"/>
            </div><div>
            <label for="M-pesa">Cash</label>
            <input type="radio" name="payment"/>
            </div>
          </div>
          <div>
              <button v-on:click="Processed()">Processed to Checkout</button>
          </div>
          </div>
    </div>
</div>
</template>

<script>
// Import the needed components for this page.
import Table from '@/components/TheTable.vue'
import Itinerary from '@/components/TheItinerary.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Checkout',
  components: { Table, Itinerary },
  data () {
    return {
      participants: 1
    }
  },
  created () {
    console.log(this.$store.getters.cartMode)
  },
  computed: {
    ...mapGetters(['cart', 'cartMode']),
    adventures () {
      // Declare the adventure array.
      let adventures
      //
      // If mode is Planner we show the itinary senction: This is the case of planned experines anf the wizard planner.
      if (this.cartMode === 'planned') {
        //
        // Think of what to do....
        console.log('The Planned experiences')
      } else {
        // This relates to sigle page call where the flow was single we only have one thing to show.
        // Get the cart from the store.
        const cart = this.cart
        // extract the activy from the cart.
        adventures = []
        cart.forEach(list => {
        // push activy tot he activy array
          adventures.push(list.activity)
        })
      }

      return adventures
    }
  },
  methods: {
    Processed () {
      alert('Service Under development')
    }
  }
}
</script>
<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 85% 15%;
  grid-template-rows: 5% 95%;
  grid-template-areas:
    "control right_panel"
    "left_panel right_panel" ;
  justify-content: space-between;
}
.container .left_panel {
  grid-area: left_panel;
  background: white;
  margin: 10px;
  overflow: scroll;
}
.container .right_panel {
    grid-area: right_panel;
    background: white;
    margin: 10px;
}

</style>
