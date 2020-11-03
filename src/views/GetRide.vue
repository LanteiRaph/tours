<template>
    <div class="container">
    <div class="controls"></div>
    <div class="left_panel">
      <div class="card" v-for="(value) in values" :key="value.id">
        <span class="card-header">
          <img :src="require(`../assets/ride/${value.img}`)" />
          <span class="card-title">
            <h3>{{value.model}}</h3>
          </span>
        </span>
        <span class="card-summary">
         This car can carry upto {{value.seats}}
        </span>
        <span class="card-meta">
          Published: June 18th, 2015
          <button type="submit" v-on:click="hireCar(value.id)">Hire Car</button>
        </span>
      </div>
    </div>
      <!-- <div class="card" v-for="(value) in values" :key="value.id" data-text="Test">
        <div class="imgbox card-header">
          <img :src="require(`../assets/ride/${value.img}`)" />
          <span></span>
        </div>
        <div class="content">
          <div>
            <h3 class="card-title"></h3>
            <p></p>
            <router-link :to="{name:'Single Detail', params:{current: value.id}}" class="route">
              <span>Read More</span>
            </router-link>
          </div>
        </div>
      </div> -->
    <!-- </div> -->
    <div class="right_panel">
      <div class="top">
        <p>Customize your experince with our trip guid wizard</p>
       <router-link :to="{name:'Plan'}" class="route">
              <button>Customize Experince</button>
      </router-link>
      </div>
      <div class="bottom">
      <p>View My Invoice</p>
       <router-link :to="{name:'Cart'}" class="route">
              <button>View Invoice</button>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Get Ride',
  data () {
    return {
      ename: 'ride',
      Flow: null,
      currentQuestion: 0,
      values: null,
      responceValue: [],
      error: null
    }
  },
  components: {},
  methods: {
    activate () {
    //
    // Dispatch the action to activate the current flow
      this.$store.dispatch('activateFlow', { ename: this.ename })
      //
      // Get the flow from the start
      this.Flow = this.$store.state.currentFlow
    },
    get_values () {
    //
    // Use the serve to get the values of the current entity.
      this.$store.state.Service.get_values(this.ename)
        .then((res) => {
          this.values = res.values
        })
        .catch((error) => console.log(error))
    },
    // Returns true or false: CheckValue
    checkValues () {
      //
      // Test for the length.
      if (this.responceValue.length === 0) {
        return false
      }
      return true
    },
    hireCar (carid) {
      //
      // From the values get the record that match the id.
      const car = this.values.find(record => record.id === carid)
      // Build the booking.
      const booking = {
        activity: car,
        date: new Date(),
        user: this.$store.user
      }
      //
      // Push the selected valus to the cart
      this.$store.dispatch('add2Cart', booking)
    },
    manage () {
    //
    // Test if the user has selected anything. ie values have been.
      if (this.checkValues()) {
      //
      // Dispatch the save values to be saved to the state object.
      //
      // Dispatch Manageflow: Returns next question of if trigger is true next flow section.
        this.$store
          .dispatch('manageFlow', {
            question: this.currentQuestion,
            flow: this.currentFlow
          })
          .then((res) => {
            console.log(res)
          })
          .catch((err) => console.log(err))
      } else {
      //
      // Set the error messege to report back to the user.
        this.error = 'Please select one of the privied Options'
      }
    }
  },
  created () {
    //
    // Actiavte the flow before the componet is mounted.
    this.activate()
    //
    // Get the values for the current entity
    this.get_values()
    // Overide the current cart mode
    this.$store.dispatch('addMode', 'null')
  },
  computed: {}
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
    "left_panel right_panel";
  justify-content: space-between;
}
.container .left_panel {
  grid-area: left_panel;
  background: white;
  margin: 10px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 50%;
  grid-row-gap: 5px;
  align-items: center;
  overflow: scroll;
}
.controls {
  grid-area: controls;
}
.container .right_panel {
  grid-area: right_panel;
  background: white;
  display: grid;
  grid-template-rows: 50% 50%;
  grid-row-gap: 5px;
  margin: 10px;
}
.card {
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 30px;
  background: #fefff9;
  color: #363636;
  text-decoration: none;
  -moz-box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
  -webkit-box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
  box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
@media (max-width: 700px) {
  .card {
    width: 100%;
  }
}
@media (min-width: 700px) {
  .card {
    max-width: 320px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .card:nth-child(even) {
    margin-right: 0;
  }
}
@media (min-width: 980px) {
  .card:nth-child(even) {
    margin-right: 20px;
  }
  .card:nth-child(3n) {
    margin-right: 0;
  }
}
.card span {
  display: block;
}
.card .card-summary {
  padding: 5% 5% 3% 5%;
}
.card .card-header {
  position: relative;
  height: 175px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.15);
  background-blend-mode: overlay;
  -moz-border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px;
  border-radius: 4px 4px 0 0;
}
.card .card-header:hover,
.card .card-header:focus {
  background-color: rgba(255, 255, 255, 0);
}
.card .card-title {
  background: rgba(157, 187, 63, 0.85);
  padding: 3.5% 0 2.5% 0;
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  text-transform: uppercase;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.card .card-title h3 {
  font-size: 1.2em;
  line-height: 1.2;
  padding: 0 3.5%;
  margin: 0;
}
.card .card-meta {
  max-height: 0;
  overflow: hidden;
  color: #666;
  font-size: 0.78em;
  text-transform: uppercase;
  position: absolute;
  bottom: 5%;
  padding: 0 5%;
  -moz-transition-property: max-height;
  -o-transition-property: max-height;
  -webkit-transition-property: max-height;
  transition-property: max-height;
  -moz-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -moz-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
}
.card:hover,
.card:focus {
  background: white;
  -moz-box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 20px 0px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 20px 0px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 20px 0px;
}
.card:hover .card-title,
.card:focus .card-title {
  background: rgba(157, 187, 63, 0.95);
}
.card:hover .card-meta,
.card:focus .card-meta {
  max-height: 1em;
}

img {
  max-width: 100%;
}

body {
  background: #f0f0f0;
  font-size: 17px;
  line-height: 1.4;
  font-family: "Jaldi", sans-serif;
}

* {
  -moz-transition-property: background-color, border-color, box-shadow, color,
    opacity, text-shadow, -moz-transform;
  -o-transition-property: background-color, border-color, box-shadow, color,
    opacity, text-shadow, -o-transform;
  -webkit-transition-property: background-color, border-color, box-shadow, color,
    opacity, text-shadow, -webkit-transform;
  transition-property: background-color, border-color, box-shadow, color,
    opacity, text-shadow, transform;
  -moz-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -moz-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
</style>
