<template>
    <div>
        <div>
        <h1>Todos</h1>
        <div class="">
            <div
            v-for="todo in allTodos"
            class="todo"
            v-bind:key="todo.key"
            >
                {{ todo.title }}
            </div>
        </div>
        </div>
    </div>    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ToDos',
    methods: {
        ...mapActions([
            'fetchTodos'
        ])
    },
    computed: {
        ...mapGetters([
            'todos'
        ])
    },
    created() {
        this.fetchTodos()
    }
};
</script>
<style scoped>

</style>
