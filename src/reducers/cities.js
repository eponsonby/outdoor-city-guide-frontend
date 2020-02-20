export default (state = [], action) => {
    switch(action.type) {
        case 'SET_CITIES':
            return action.cities
        case 'CLEAR_CITIES':
            return []
        default:
            return state
    }
}
