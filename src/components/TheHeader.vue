<template>
    <header id="pageHeader">
      <div class="header">
        <User />
        <span class="logo">
          <p>Timchist adventures</p>
        </span>
        <span class="user">
          <router-link to='/cart'>
            <span> <img src="@/assets/busket.png" width="30px"/></span>
          </router-link>
        </span>
      </div>
    </header>
</template>

<script>
//
// Import the componets needed
import User from './TheUser.vue'

export default {
  name: 'Header',
  components: { User },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
