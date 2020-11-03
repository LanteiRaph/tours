<template>
    <div id="signup">
        <h1>Sign Up</h1>
        <input type="email" name="email" v-model="input.email" placeholder="Email" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="signup()">Submit</button>
    </div>
</template>

<script>
export default {
  name: 'Signp',
  data () {
    return {
      input: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signup () {
      const formdata = {
        email: this.input.email,
        password: this.input.password
      }
      this.$store.dispatch('signup', formdata)
    }
  }
}
</script>

<style scoped>
    #signup {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
