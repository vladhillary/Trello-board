const initialState = {
    todo: [{
        title: 'some title',
        text: ' sometext'
    }],
    doing: [{
        title: 'some title',
        text: ' sometext'
    }],
    done: [{
        title: 'some title',
        text: ' sometext'
    }],

}

const tasks = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_CREATE_TASK_TODO':

            return {
                ...state,
                todo: [...state.todo, action.payload]

            }


        default: return state
    }


}
export default tasks