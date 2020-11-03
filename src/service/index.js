// Represent all srver side calls.
import Vue from 'vue'
import Vuex from 'vuex'
import { Promise } from 'core-js'
// import axios from 'axios'
import router from '../router/index.js'
import firebase from '../Firebase/index.js'
import Flow from '../service/flow.js'
import Schema from '../service/schema.js'
import Service from '../service/server.js'
// import { reject, resolve } from 'core-js/fn/promise'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: localStorage.getItem('token') || '',
    user: null,
    cartTotal: 0,
    cart: [],
    Flow,
    Service,
    Schema,
    FlowTitle: null,
    currentFlow: null,
    cartMode: null
  },
  mutations: {
    cartMode (state, mode) {
      state.cartMode = mode
    },
    authUser (state, userData) {
      state.idToken = userData.token
    },
    clearAuth (state) {
      state.idToken = null
      state.userId = null
    },
    addToCart (state, adventure) {
      //
      // Update the state with the given task and the  length of the cart.
      state.cart.push(adventure)
      state.cartTotal = state.cart.length
    },
    checkout () {

    },
    flowActivate (state, FlowAuth) {
      //
      if (FlowAuth.ename !== '') {
        //
        // Update the state with the folow titel and it flow object.
        const current = state.Flow.find(start => start.ename === FlowAuth.ename)
        state.currentFlow = current
        state.FlowTitle = FlowAuth.ename
      } else {
        //
        // Get the index of the current flow .
        let index = state.Flow.indexOf(FlowAuth.Flow)
        //
        // Add one to the index.
        const next = index++
        //
        // Get the flow object that corresponding
        const newFlow = state.Flow[next]
        //
        // Update the new state with the new values.
        state.currentFlow = newFlow
        state.FlowTitle = newFlow.ename
      }
    }
  },
  actions: {
    manageFlow ({ commit }, FlowAuth) {
      //
      // Return a promise to manage the user intaractions
      return new Promise((resolve) => {
        //
        // Check for the question lenth if done proceedd if not return and provide next question parameter.
        if (FlowAuth.question !== FlowAuth.Flow.questions.length) {
          //
          // Increamenet the question byone to move to the next.
          const question = FlowAuth.question++
          //
          // Resolve with the new question index and anyother needed data
          resolve(question)
        }
        //
        // Test for the trigger: Does it trigger the next part of the flow
        if (Flow.trigger) {
          //
          // Compile the flowAuth data: the next flow ename
          const Auth = { flow: FlowAuth.Flow }
          //
          // Activate the next flow.
          commit('flowActivate', Auth)
          //
          // Resolve with the new flow.
          resolve({ question: 0 })
        }
      })
    },
    activateFlow ({ commit }, Flowstart) {
      //
      // Get the starting point.
      const ename = Flowstart.ename ? Flowstart.ename : ''
      // Commit to mutate the state, save the current start point.
      commit('flowActivate', { ename })
    },
    signup ({ commit }, authData) {
      firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password).then(
        user => {
          console.log(user)
          router.go(-1)
        },
        error => {
          alert(error)
        }
      )
    },
    login ({ commit }, authData) {
      firebase.auth().signInWithEmailAndPassword(authData.email, authData.password).then(
        user => {
          console.log(user)
          localStorage.setItem('token', user.uid)
          commit('authUser', {
            token: user.uid
          })
          // router.push('/')
        },
        error => {
          alert(error)
        }
      )
    },
    logout ({ commit }) {
      commit('clearAuth')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/')
    },
    AutoLogin ({ commit }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
    },
    add2Cart ({ state, commit }, adventure) {
      // Find the current adventure in the stateif found.
      const activitiy = state.cart.find(acti => acti.id === adventure.id)
      // Test
      if (activitiy) {
        //
        // return back to the user that we have found
      } else {
        commit('addToCart', adventure)
      }
    },
    addMode ({ commit }, mode) {
      // Commit the mode to the state as the cart mode.check if null
      if (mode) {
        commit('cartMode', mode)
      }
    },
    add2Itinerary ({ commint }, experience) {
      // Commint the xperince to the Itinerary array.
      if (experience) {
        commint('pushToItinerary', experience)
      }
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    ifAuthenticated (state) {
      return state.idToken !== null
    },
    cart (state) {
      return state.cart
    },
    cartMode (state) {
      return state.cartMode
    }
  }
})
