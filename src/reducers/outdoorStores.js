export default (state = {loading: false, data:[]}, action) => {
    switch(action.type) {
        case 'SET_OUTDOOR_STORES':
            return {loading: false, data: action.outdoorStores}
        case 'LOADING_OUTDOOR_STORES':
            return {...state, loading: true}
        default:
            return state
    }
}
