import { createStore } from 'vuex';

const savedTasks = JSON.parse(localStorage.getItem('AllTaskes')) || [];

export default createStore({
  state: {
    AllTaskes: savedTasks,
  },
  mutations: {
    DELETE_TASK(state, id) {
      state.AllTaskes = state.AllTaskes.filter((task) => task.id !== id);
      localStorage.setItem('AllTaskes', JSON.stringify(state.AllTaskes));
    },
    ADD_TASK(state, task) {
      state.AllTaskes.push(task);
      localStorage.setItem('AllTaskes', JSON.stringify(state.AllTaskes));
    },
  },
});
