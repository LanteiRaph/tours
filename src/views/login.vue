<template>
    <div id="login">

        <h1>Login</h1>
        <input type="email" name="email" v-model="input.email" placeholder="Email" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
        <p>Dont have an Account? <router-link to='/signup'>Sign Up</router-link></p>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const formData = {
        email: this.input.email,
        password: this.input.password
      }
      console.log(formData)
      // console.log(this.$store)
      this.$store.dispatch('login', { email: formData.email, password: formData.password })
    }
  }
}
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
