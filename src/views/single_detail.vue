<template>
    <div class="container">
        <div class="left_panel">
            <div class="imgDetails">
                <div class="large_imgBox">
                    <img :src="require(`../assets/planned/${activity.img}`)"/>
                </div>
                <div class='small_imgBox'></div>
            </div>
            <div class="content">
                <h2>{{activity.name}}</h2>
                <p>{{activity.description}}</p>
                <div><span>Maximun Pirce:{{activity.price.max_price}}</span>
                <span> Minimum Price:{{activity.price.min_price}}</span></div>
                <span class="date"> Schedule Date:{{activity.date}}</span>
              <span class="route" v-on:click="booknow()">Book Now</span>
            </div>
        </div>
        <div class="right_panel">
          <h2>My Bookings </h2>
          <div v-if="bookings === false">
            <p>You Currently dont have any booking, make a <br>
              <span class="route">Booking Now</span>
            </p>
          </div>
          <div v-if="bookings === true">
            <p>You Currently have <br>
            <span class="cartTotal">{{cartTotal}} Bookings, View Your
              <router-link class="cart" to="/cart">
                <img src="../assets/busket.png" width='20px'/>
                </router-link></span></p>
          </div>
    </div>
    </div>
</template>

<script>
//
// Import neede modules to handle any extra funtionality.
// import services from '@/service/server.js'
export default {
  name: 'Single Detail',
  components: { },
  data () {
    return {
      ename: this.$route.params.entity,
      current: this.$route.params.current,
      values: [],
      bookings: false,
      cartTotal: this.$store.state.cartTotal
    }
  },
  computed: {
    activity () {
      return this.values.find(activity => activity.id === this.current)
    }
  },
  created () {
    // Get the values of the cart, use the entity we came from to handle the values (For now though)
    this.$store.state.Service.get_values(this.ename).then((res) => {
      this.values = res.values
    })
    // Update the mode to match nothing, we might have gone to any other page before coming here.
    this.$store.dispatch('addMode', 'null')
  },
  methods: {
    //
    // add the current advenrure to the user cart.
    booknow () {
      //
      // Set booking to true...
      this.bookings = true
      this.cartTotal++
      // Build the booking.
      const booking = {
        activity: this.activity,
        date: new Date(),
        user: this.$store.user
      }
      //
      // Dispatch the store add2cart to manage the cart.
      this.$store.dispatch('add2Cart', booking)
    }
  },
  mounted () {
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
  display: grid;
  grid-template-columns: 50% 50%;
}
.container .left_panel .imgDetails{
    width: 100%;
    height: 100%;
}
.controls{
  grid-area: controls;
}
.container .right_panel {
    grid-area: right_panel;
    background: white;
    margin: 10px;
}
.container .left_panel .large_imgBox{
  top: 0;
  left: 0;
  align-self: center;
  padding: 10px;
}
.container .left_panel .large_imgBox img {
    max-width: 100%;
    max-height: 100%;
}
.container .left_panel .content{
    padding: 30px;
    text-align: -webkit-center;
}
.container .left_panel .content h2{
    font-size: 35px;
    border-bottom: 1px solid red;
}
.container .left_panel .content p{
    height: 50%;
    width: 40%;
}
.container .left_panel .content span{
    display: block;
    padding: 2px;
}
.container .left_panel .route{
    float: right;
    text-decoration: none;
    color: white;
    background: #fff9a5;
    width: 100px;
    cursor: pointer;
}
.container .right_panel h2{
  align-self: center;
  text-align: center;
}
.container .right_panel p{
  text-align: center;
  font-size: 15px;
}
.container .right_panel p .route{
 padding: 2px;
 margin: 10px  0;
 color: white;
}
 @keyframes glowing {
        0% {
          background-color: #2ba805;
          box-shadow: 0 0 5px #2ba805;
        }
        50% {
          background-color: #49e819;
          box-shadow: 0 0 20px #49e819;
        }
        100% {
          background-color: #2ba805;
          box-shadow: 0 0 5px #2ba805;
        }
      }
      .route {
        animation: glowing 1300ms infinite;
      }
</style>
