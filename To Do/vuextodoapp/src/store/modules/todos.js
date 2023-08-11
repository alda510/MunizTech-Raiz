import axios from 'axios';

const state = {
    todos: []
};

//getting the states
const getters = {
    allTodos: state => {
        return state.todos
    }
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
};

export default {
    state,
    getters,
    actions,
    mutations
};