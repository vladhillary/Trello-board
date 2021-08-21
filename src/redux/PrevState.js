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

export default checkStoreInLocalStorage