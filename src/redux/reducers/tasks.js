const initialState = {
    todo: [],
    doing: [],
    done: []

}

const tasks = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_CREATE_TASK_TODO':

            return {
                ...state,
                todo: [...state.todo, action.payload]

            }
        case 'SET_CREATE_TASK_DOING':

            return {
                ...state,
                doing: [...state.doing, action.payload]

            }

        case 'SET_CREATE_TASK_DONE':

            return {
                ...state,
                done: [...state.done, action.payload]

            }


        default: return state
    }


}
export default tasks