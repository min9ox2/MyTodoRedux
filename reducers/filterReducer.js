export default filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.currentFilter
        default:
            return state
    }
}