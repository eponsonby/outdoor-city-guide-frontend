export default (state = {loading: false, data: []}, action) => {
    switch(action.type) {
        case 'SET_LOCAL_PARKS':
            return action.localParks
        case 'LOADING_PARKS':
            return {...state, loading: true}
        default:
            return state
    }
}
