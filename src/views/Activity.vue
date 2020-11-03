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
            <router-link :to="{name:'SingleDetail', params:{current: activity.id, entity:ename}}" class="route">
              <span>Read More</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="right_panel">
      <div class="top">
        <p>Customize your experince with our trip guide wizard</p>
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
// Import neede modules to handle any extra funtionality.
// import services from '@/service/server.js'
//
//
export default {
  name: 'Activity',
  data () {
    return {
      values: [],
      ename: 'planned'
    }
  },
  methods: {
    reduceDesc (str, num = 44) {
      if (str.length > num) {
        const subStr = str.substring(0, num)
        return subStr + '...'
      } else {
        return str
      }
    }
  },
  computed: {
    planned () {
      return this.values.filter((activity) => {
        const desc = activity.description
        const newDesc = this.reduceDesc(desc)
        activity.description = newDesc
        return !activity.planned
      })
    }
  },
  created () {
    this.$store.state.Service.get_values(this.ename).then((res) => { this.values = res.values })
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
