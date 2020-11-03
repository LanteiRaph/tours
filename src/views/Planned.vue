<template>
  <div class="container">
    <div class="controls"></div>
    <div class="left_panel">
      <div class="card" v-for="(activity) in planned" :key="activity.id" data-text="Test">
        <div class="imgbox">
          <img :src="require(`../assets/planned/${activity.img}`)" />
        </div>
        <div class="content">
          <div>
            <h3>{{activity.name}}</h3>
            <p>{{activity.description}}</p>
            <button class="route" @click="select(activity.id)">
              Select Experince
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="right_panel">
      <div class="top">
        <p>Customize your experince with our trip guid wizard</p>
       <router-link :to="{name:'Plan'}" class="route">
              <button>Customize Experince</button>
      </router-link>
      </div>
      <div class="bottom">
      <p>View My Experince</p>
       <router-link :to="{name:'Cart'}" class="route">
              <button>View Experince</button>
      </router-link>
      </div>
    </div>
  </div>
</template>
<script>
//
//
export default {
  name: 'Planned',
  data () {
    return {
      values: [],
      Flow: null,
      responceValue: [],
      ename: 'planned'
    }
  },
  methods: {
    select (id) {
      // Find the activity matching the id
      const planned = this.values.find(value => value.id === id)
      // Push the given activity to the
      this.$store.dispatch('add2Itinerary', planned)
    },
    reduceDesc (str, num = 44) {
      if (str.length > num) {
        const subStr = str.substring(0, num)
        return subStr + '...'
      } else {
        return str
      }
    },
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
  computed: {
    planned () {
      return this.values.filter((activity) => {
        const desc = activity.description
        const newDesc = this.reduceDesc(desc)
        activity.description = newDesc
        return activity.planned
      })
    },
    topRated () {
      return this.values.find(activity => activity.isRatedTop)
    }
  },
  created () {
    alert('Componet Created')
    //
    // Activate the flow.
    this.activate()
    //
    // Get values for the current entity
    this.get_values()
    // Update the mode of the cart
    this.$store.dispatch('addMode', 'planned')
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
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 50%;
  grid-row-gap: 5px;
  align-items: center;
  overflow: scroll;
}
.controls{
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
.container .card {
  position: relative;
  height: 80%;
  display: flex;
  margin: 10px;
}
.container .card .imgbox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff9a5;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}
.container .card .imgbox img {
  max-width: 150px;
  transition: 0.5s ease-in-out;
}
.container .card:hover .imgbox {
  display: none;
 transform:translate(9999px);
  opacity: 0;
}
.container .card .content {
  position: absolute;
  right: 0;
  width: calc(100% - 75px);
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .card .content h3 {
  margin-bottom: 5px;
  font-size: 24px;
}
.container .card .content .route {
  display: inline-block;
  margin-top: 10px;
  padding: 5px;
  text-decoration: none;
  background: #a1a19d;
  color: black;
}
</style>
