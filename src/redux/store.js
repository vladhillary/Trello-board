import { createStore } from 'redux'
import rootReducer from './reducers'


const checkStoreInLocalStorage = () => {

    const oldState = JSON.parse(window.localStorage.getItem('trello'))

    const initialState = {
        todo: [],
        doing: [],
        done: []
    }

    if (!oldState) return initialState

    return oldState
}


const store = createStore(rootReducer, checkStoreInLocalStorage(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const saveStateInLocalStorage = (state) => {

    try {

        window.localStorage.setItem('trello', JSON.stringify(state))

    } catch (err) {

        console.log(err)

    }
}

store.subscribe(() => {
    saveStateInLocalStorage(store.getState())
});


export default store