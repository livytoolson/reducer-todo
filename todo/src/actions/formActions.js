export const ADD = "ADD"
export const CLEAR = "CLEAR"
export const TOGGLE = "TOGGLE"

export const addTodo = (input) => {
    return({type:ADD, payload:input})
}

export const clearTodo = () => {
    return({type:CLEAR})
}

export const toggleTodo = (id) => {
    return({type:TOGGLE, payload:id})
}