const initialState = [{
    title: ' some title',
    text: ' sometext'
}]

const createTask = (state = initialState, action) => {

    switch (action.payload) {
        case 'SET_CREATE_TASK':
            return [...state, action.payload]
        default: return state
    }


}
export default createTask