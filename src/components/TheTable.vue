<template>
    <!--------Cart Section ------>
        <div class="small-container cart-page">
            <table>
                <tr>
                    <th>Products</th>
                    <th>participant</th>
                    <th>Price</th>
                </tr>
                <tr v-for="(adventure, i) in adventures" :key="i">
                    <td>
                        <div class="cart-info">
                            <img :src="require(`../assets/planned/${adventure.img}`)"/>
                            <div>
                                <p>{{adventure.name}}</p>
                                <a>Remove</a>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="1" v-model="participants"> </td>
                    <td>{{Subtotal}}</td>
                </tr>
            </table>
            <div class="total-price">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>{{Subtotal}}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>{{tax}}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>{{total}}</td>
                    </tr>
                </table>
            </div>
        </div>
</template>

<script>
export default {
  name: 'cartTable',
  components: {},
  props: ['adventures'],
  data () {
    return {
      participants: 1
    }
  },
  methods: {

  },
  computed: {
    length () {
      console.log(this.adventures)
      return this.adventures.length
    },
    Subtotal () {
      // // Compit the price array.
      // // Get the min price from the activity
      // // eslint-disable-next-line arrow-spacing
      // const minPrices = this.bookings.map((booking)=> {
      //   return booking.price.min_price
      // })
      // return minPrices.reduce((a, b) => {
      //   return a + b
      // })
      return ''
    },
    tax () {
      return 300
    },
    total () {
      return ''
    }
  }
}
</script>

<style scoped>
.cart-page{
    margin:5px;
}
table{
    width: 100%;
    border-collapse: collapse;
}
.cart-info{
    display: flex;
    flex-wrap: wrap;
}
th{
    text-align: left;
    padding: 5px;
    color: white;
    background: #ff523b;
}
td{
    padding: 10px 5px;
}
td input{
    width: 40px;
    height: 30px;
    padding: 5px;
}
td a{
    color: #ff523b;
    font-size: 12px;
}
td img{
    width: 80px;
    height: 80px;
    margin-right: 10px;
}
.total-price{
    display: flex;
    justify-content: flex-end;
}
.total-price table{
    border-top: 3px solid #ff523b;
    width: 100%;
    max-width: 350px;
}
td:last-child{
    text-align: right;
}
th:last-child{
    text-align: right;
}
</style>
