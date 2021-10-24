import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let defaultCity='上海'
defaultCity=localStorage.city
const state={
    city:defaultCity
}
const mutations={
    changeCity(state,newCity){
        state.city=newCity
        localStorage.city=newCity
    }
}
export default new Vuex.Store({
    state,mutations
})