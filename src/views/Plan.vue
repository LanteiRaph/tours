<template>
  <div class="container">
    <div class="controls">
        <i></i>
        <!-- <div class="question">{{plan[currentQuestion]}}</div> -->
        <i></i>
    </div>
    <div class="left_panel">
      <div>
        <span v-for="current  in Flow" :key="current.id">
            <button type="button" class="collapsible" v-on:click="collapsable($event)">{{current.title}}</button>
            <div class="content">
              <p>{{current.description}}</p></div>
        </span>
      </div>
      <div>
        Express the reason for this wizard.
        <div>
          <p>Start Your Planner Experinse Now</p>
          <router-link to="/planner"><button>Start</button></router-link>
        </div>
      </div>
    </div>
    <div class="right_panel">
        <div>
            <p>Plan A trip with our map Wizard</p>
            <button v-on:click="viewMap()">View Map</button>
        </div>
        <div>
          <p>See Planned Experinses</p>
          <router-link to="/planned"><button>Planned</button></router-link>
        </div>
    </div>
  </div>
</template>

<script>
//
// Import the server module.
// import services from '@/service/server.js'

export default {
  name: 'Plan',
  data () {
    return {
      Flow: null,
      currentQuestion: 0,
      selectedCounty: null,
      countyName: null,
      currentSelector: null
    }
  },
  mounted () {
    // alert('Mounted')
  },
  methods: {
    viewMap () {
      alert('Service Under Development')
    },
    updateSeletor () {

    },
    collapsable (element) {
      // Get the button that was clicked.
      const button = element.target
      // Toggle the class active to set it as active or not active.
      button.classList.toggle('active')
      // Get the content to show
      const content = button.nextElementSibling
      // check for the dislay propety and manage the
      if (content.style.display === 'block') {
        content.style.display = 'none'
      } else {
        content.style.display = 'block'
      }
    }
  },
  created () {
    //
    // Get the flow from the state.
    this.Flow = this.$store.state.Flow
  },
  computed: { }
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
    "controls right_panel"
    "left_panel right_panel" ;
  justify-content: space-between;
}
.container .left_panel {
  grid-area: left_panel;
  background: white;
  margin: 10px;
  display: grid;
  grid-template-columns: 50% 50%;
  /* grid-template-rows: 50% 50%; */
  grid-row-gap: 5px;
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
.container .controls{
    display: flex;
    justify-content: space-between;
}
/*Style the collapsables */
.collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: #ff523b;
}

.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}
</style>
