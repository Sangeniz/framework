import { createStore } from 'vuex'

export default createStore({
  state: {
    sabor: "chocolate",
    adornos: ["velas", "flores"],
    nombre: "omar",
    apellido: "marquez",
    tel1: 55555551,
    correo1: "yosoy@hotmail.com",
    descp: "chocolate con velas y flores" ,
    color: "rosa",
    naranja: ""

  },
  getters: {
    nombre: state => state.nombre 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
