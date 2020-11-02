export const ADD = "ADD"
export const CLEAR = "CLEAR"
export const TOGGLE = "TOGGLE"

export const setNewTodo = (inputText) => {
    return({type:ADD, payload: inputText})
}

export const setClearTodo = () => {
    return({type:CLEAR})
}

export const setToggle = (id) => {
    return({type:TOGGLE, payload:id})
}