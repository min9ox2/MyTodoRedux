let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text,
        id: nextTodoId++
    }
}

export const toggleTodo = (index) => {
    return {
        type: 'TOGGLE_TODO',
        index,
    }
}

export const setFilter = (currentFilter) => {
    return {
        type: 'SET_FILTER',
        currentFilter
    }
}