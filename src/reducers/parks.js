export default (state = {loading: false, data: []}, action) => {
    switch(action.type) {
        case 'SET_NATIONAL_PARKS':
            return action.parks
        case 'LOADING_PARKS':
            return {...state, loading: true}
        default:
            return state
    }
}
