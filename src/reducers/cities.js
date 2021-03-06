export default (state = {loading: false, data:[]}, action) => {
    switch(action.type) {
        case 'SET_CITIES':
            return {loading: false, data: action.cities}
        case 'LOADING_CITIES':
            return {...state, loading: true}
        default:
            return state
    }
}
