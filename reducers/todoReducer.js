export default todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: action.id,
                text: action.text,
                completed: false
            }]
        case 'TOGGLE_TODO':
            //let newState = Object.assign({}, state);
            let newState = [...state]
            return newState.map(todo => {
                if (todo.id == action.index) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        default:
            return state
    }
}