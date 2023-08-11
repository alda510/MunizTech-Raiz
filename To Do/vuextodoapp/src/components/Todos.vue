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
export default {
    name: 'ToDos',
}
</script>

<style scoped>

</style>
