<template>
    <span class="holder">
        <span class="options">
           <button v-on:click="next(false)"  id="back">Back</button>
          </span>
        <span class="options">
          <button v-on:click="next()" id="next">Next</button>
        </span>
    </span>
</template>

<script>
export default {
  name: 'Controls',
  data () {
    return {}
  },
  methods: {
    next (forward = true) {
      this.$emit('next')
    }
  }
}
</script>

<style scoped>
.holder{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.options{
   z-index: 1;
   margin: auto;
}
</style>
