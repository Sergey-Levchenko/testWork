import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tableData: [],
    editingId: null
  },
  mutations: {
    deleteRow(state, payload) {
      state.tableData.splice(payload, 1);
      const parsed = JSON.stringify(state.tableData);
      localStorage.setItem('testList', parsed);
    },
    createRow(state, payload) {
      const newItem = {
        id: idGenerate(),
        name: payload.name,
        description: payload.description
      }
      state.tableData.push(newItem)
      const parsed = JSON.stringify(state.tableData);
      localStorage.setItem('testList', parsed);
    },
    changeRow(state, payload) {
      const index = state.tableData.findIndex(item => item.id == state.editingId);
      console.log(state.tableData[index]);
      if (state.editingId) {
        if (payload.name) state.tableData[index].name = payload.name;
        if (payload.description) state.tableData[index].description = payload.description;
      }
      state.editingId = null;

      const parsed = JSON.stringify(state.tableData);
      localStorage.setItem('testList', parsed);

    },
    loadTable(state) {
      if (localStorage.getItem('testList')) {
        try {
          state.tableData = JSON.parse(localStorage.getItem('testList'));
        } catch (e) {
          console.log(e);
        }
      }
    },
    addEditingId(state, payload) {
      state.editingId = payload;
    },
    resetEditingId(state) {
      state.editingId = null;
    }
  },
  actions: {
    deleteRow({ commit }, payload) {
      commit("deleteRow", payload)
    },
    createRow({ commit }, payload) {
      commit("createRow", payload)
    },
    changeRow({ commit }, payload) {
      commit("changeRow", payload)
    },
    loadTable({ commit }) {
      commit("loadTable")
    },
    addEditingId({ commit }, payload) {
      commit("addEditingId", payload)
    },
    resetEditingId({ commit }) {
      commit("resetEditingId", payload)
    },
  },
  getters: {
    getTable: state => state.tableData,
    getId: state => state.editingId
  }
})

export default store

const idGenerate = () => {
  const id = `_${(~~(Math.random() * 1e15)).toString(35)}`
  if (!store.getters.getTable.some((item) => { return item.id == id })) return id
  else return idGenerate()
}
