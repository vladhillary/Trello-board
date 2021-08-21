import checkStoreInLocalStorage from '../PrevState'

const initialState = checkStoreInLocalStorage()

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

        case 'SET_DELETE_TASK_TODO':

            return {

                ...state,
                todo: state.todo.filter(task => task.id !== action.payload)

            }

        case 'SET_DELETE_TASK_DOING':

            return {

                ...state,
                doing: state.doing.filter(task => task.id !== action.payload)

            }

        case 'SET_DELETE_TASK_DONE':

            return {

                ...state,
                done: state.done.filter(task => task.id !== action.payload)

            }

        case 'SET_EDIT_TASK_TODO':

            const taskToEditIndexTodo = state.todo.findIndex(task => task.id === action.payload.id)

            const firstPartTodo = state.todo.slice(0, taskToEditIndexTodo)

            const secondPartTodo = state.todo.slice(taskToEditIndexTodo + 1)

            return {

                ...state,
                todo: [...firstPartTodo, action.payload, ...secondPartTodo]

            }

        case 'SET_EDIT_TASK_DOING':

            const taskToEditIndexDoing = state.doing.findIndex(task => task.id === action.payload.id)

            const firstPartSDoing = state.doing.slice(0, taskToEditIndexDoing)

            const secondPartDoing = state.doing.slice(taskToEditIndexDoing + 1)

            return {

                ...state,
                doing: [...firstPartSDoing, action.payload, ...secondPartDoing]

            }

        case 'SET_EDIT_TASK_DONE':

            const taskToEditIndexDone = state.done.findIndex(task => task.id === action.payload.id)

            const firstPartDone = state.done.slice(0, taskToEditIndexDone)

            const secondParDone = state.done.slice(taskToEditIndexDone + 1)

            return {

                ...state,
                done: [...firstPartDone, action.payload, ...secondParDone]

            }


        default: return state
    }


}
export default tasks