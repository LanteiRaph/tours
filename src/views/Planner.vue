<template>
    <div class="container">
      <div class="controls">
        <Controls v-on:next="next()" />
      </div>
      <div class="left_panel">
        <div class="description">
          <h2>Welcome To The Planner Wizerd, Customise your experince</h2>
          <span id="question" v-if="!radio">
            <span >{{currentQuestion}}</span>
          </span>
          <span v-if="radio">
            <fieldset>
                <legend>{{currentQuestion}}</legend>
                <input name="responce" v-model="input.responce" type="radio" value="yes" v-on:click="change($event)" class="input">
                <label for="yes">Yes</label><br/>
                <input name="responce" v-model="input.responce" type="radio" value="no" v-on:click="change($event)" class="input">
                <label for="no">No</label><br/>
            </fieldset>
          </span>
        </div>
        <span v-if="showValues">
          <County v-if="currentContent === 'county'"  :values="values" v-on:select="selector"/>
          <Activity  v-else-if="currentContent ==='planned'" :values="values" v-on:select="selector"/>
          <Hotel   v-else-if="currentContent === 'hotel'" :values="values" v-on:select="selector"/>
          <Ride  v-else-if="currentContent === 'ride'" :values="values" v-on:select="selector"/>
          <Place v-else-if="currentContent === 'place'" :values="values" v-on:select="selector"/>
        </span>
      </div>
      <div class="right_panel">
        <p>{{currentFlow.description}}</p>
        <router-link to="/cart">View my Experience <button>View Experience</button></router-link>
      </div>
    </div>
</template>

<script>
import Ride from '../components/Entity/TheRide.vue'
import Hotel from '../components/Entity/TheHotel.vue'
import County from '../components/Entity/TheCounty.vue'
import Activity from '../components/Entity/TheActivity.vue'
import Place from '../components/Entity/ThePlace.vue'
import Controls from '../components/TheControles.vue'
//
//
export default {
  name: 'Planner',
  data () {
    return {
      currentQuestion: '',
      responceValue: null,
      values: [],
      question: 0,
      radio: false,
      showValues: true,
      currentContent: null,
      ename: null,
      currentFlow: this.$store.state.currentFlow,
      currentIndex: 0,
      input: {
        selected: false
      }
    }
  },
  components: {
    Ride, Hotel, County, Activity, Place, Controls
  },
  methods: {
    // Activate the wizared by populating the Data with all needed data.
    activate () {
      // Get the first element of the flow and activete its flow.
      this.currentFlow = this.Flow[this.currentIndex]
      // Get the entity name for the currentFlow
      this.ename = this.currentFlow.ename
      // Use the ename to distache the flow activater.
      this.$store.dispatch('activateFlow', { ename: this.ename })
    },
    // Manage the question section
    manageQuestions () {
      //
      // Get the firt question for the flow.
      this.question = this.currentFlow.question[0]
      // Handle the view of the question
      this.viewHandler()
    },
    // Find the value of the given id and manage the responce.
    selector (id) {
      // Use the is to find the selectd value and save it to the reponcevalue array.
      const value = this.values.find(value_ => value_.id === id)
      // Build the booking.
      const booking = {
        activity: value,
        date: new Date(),
        user: this.$store.user
      }
      // Push the value to the id.
      this.responceValue = booking
    },
    // Each question has a diffrent view, string question have to responce, array question do and showing of values depend on that.
    viewHandler () {
      // Test for the type of the question.
      if (this.question instanceof Array) {
        // Get the zero elemnt of the array and replce the question.
        const question = this.question[0]
        // Set the current question
        this.currentQuestion = question
        // Set the radio option to true
        this.radio = true
        this.showValues = false
      } else {
        // Replace the current question with the question
        this.currentQuestion = this.question
      }
    },
    // Get the values for the current entity
    get_values () {
      // Get the values for the current ename.
      this.$store.state.Service.get_values(this.ename, this.currentFlow.parent).then((res) => {
        this.values = res.values
      })
    },
    // Mange th evalues of the current content: Set the cont to match the ename: Values corespondd to entities
    manageValues () {
      // Set the current content to match the entity.
      this.currentContent = this.ename
    },
    // Move next to the next part of the flow.
    next (forward = true) {
      // Test the current flow length aganist the current index
      if (this.currentIndex !== this.Flow.length) {
        // Increment the current index
        if (forward) { this.currentIndex++ } else { this.currentIndex-- }
        // Start the wizard all over again
        this.start()
        // Test if the current index is equal to the lenght if so we have no where else to go to
        if (this.currentIndex === this.Flow.length) this.$el.querySelector('#next').disabled = true
        //
        this.input.selected = false
        // Update the cart with the current responce
        this.$store.dispatch('add2Itinerary', this.responceValue)
      }
    },
    // Kick start the flow from the current index.
    start () {
      // Actavte the Wizard.
      this.activate()
      // Get the values for the current flow option.
      this.get_values()
      // Manage the values to match the current content.
      this.manageValues()
      // Mange the qustion value.
      this.manageQuestions()
    },
    change (event) {
      // Get the value of the event target element
      const value = event.target.value
      // Test for the value
      if (value === 'yes') {
        this.showValues = true
      }
    }
  },
  created () {
    // Fetch the flow from the state
    this.Flow = this.$store.state.Flow
    // Start the wizrd.
    this.start()
    // Disapatch the mode of the cart at this moment to keep it safe.
    this.$store.dispatch('addMode', 'planned')
  }
}
</script>
<style>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 85% 15%;
  grid-template-rows: 5% 95%;
  grid-template-areas:
    "controls right_panel"
    "left_panel right_panel";
  justify-content: space-between;
}
.container .left_panel {
  grid-area: left_panel;
  background: white;
  margin: 10px;
  display: grid;
  /* grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%; */
  grid-row-gap: 5px;
  align-items: center;
  overflow: scroll;
}
.controls {
  grid-area: controls;
  display: flex;
  justify-content: space-between;
}
.container .right_panel {
  grid-area: right_panel;
  background: white;
  display: grid;
  grid-template-rows: 50% 50%;
  grid-row-gap: 5px;
  margin: 10px;
}

</style>
