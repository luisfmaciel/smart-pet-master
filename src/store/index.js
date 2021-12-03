import { createStore } from 'vuex'
import pet from '../data/pet.js'
import dateVaccine from '../data/dateVaccine.js'

export default createStore({
  state: {
    pet: pet,
    dateVaccine: dateVaccine,
    update: {
      idx: '',
      edit: false
    }
  },
  mutations: {
    createNewPet(state, payload) {
      state.pet.push(payload)
      window.localStorage.setItem('myPet', JSON.stringify(state.pet))
    },
    saveNewVaccine(state, payload) {
      state.dateVaccine.push(payload)
      window.localStorage.setItem('saveVaccine', JSON.stringify(state.dateVaccine))
    },
    updateVacinne(state, payload) {
      state.dateVaccine[state.update.idx] = payload
        window.localStorage.setItem('saveVaccine', JSON.stringify(state.dateVaccine))
    },
    removeVaccine(state, payload) {
      state.dateVaccine.splice(payload, 1)
      window.localStorage.setItem('saveVaccine', JSON.stringify(state.dateVaccine))
    },
    checkVaccine(state, payload) {
      state.dateVaccine[payload].done = !state.dateVaccine[payload].done
      window.localStorage.setItem('saveVaccine', JSON.stringify(state.dateVaccine))
    },
    editVaccine(state, payload) {
      state.update = payload
    }
    
  },
  actions: {
    saveVaccine(context, payload) {
      let update = this.state.update
      if(update.edit) {
        context.commit('updateVacinne', payload)
        update.idx = "",
        update.edit = false
      } else {
        context.commit('saveNewVaccine', payload)
      }
    },
    removeDate(context, payload) {
      context.commit('removeVaccine', payload)
    },
    createPet(context, payload) {
      context.commit('createNewPet', payload)
    },
    doneVaccine(context, payload) {
      context.commit('checkVaccine', payload)
    },
    editDate(context, payload) {
      context.commit('editVaccine', payload)
    }
  }, 
  getters: {
    getPet(state) {
      return state.pet[0]
    },
    getVaccine(state) {
      return state.dateVaccine
    }
  }
})
