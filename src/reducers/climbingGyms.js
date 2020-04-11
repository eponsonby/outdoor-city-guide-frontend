export default (state = {loading: false, data:[]}, action) => {
    switch(action.type) {
        case 'SET_CLIMBING_GYMS':
            return {loading: false, data: action.climbingGyms}
        case 'LOADING_CLIMBING_GYMS':
            return {...state, loading: true}
        default:
            return state
    }
}
