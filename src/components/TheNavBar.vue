<template>
    <div id="siteAds">
      <div class="menu">
        <router-link to="/about" class="link">
          <span class="btn">About</span>
        </router-link>
        <router-link to="/planned" class="link">
          <span class="btn">Our Adventures</span>
        </router-link>
        <router-link to="/plan" class="link">
          <span class="btn">Plan Your Trip</span>
        </router-link>
        <router-link to="/activity" class="link">
          <span class="btn">Things To Do</span>
        </router-link>
        <router-link to="/hotel" class="link">
          <span class="btn">Where To Stay</span>
        </router-link>
        <router-link to="/getride" class="link">
          <span class="btn">Get a Ride</span>
        </router-link>
        <router-link to="/gallary" class="link">
          <span class="btn">Gallery</span>
        </router-link>
      </div>
    </div>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
    return {

    }
  }
}
</script>
<style scoped>

</style>
