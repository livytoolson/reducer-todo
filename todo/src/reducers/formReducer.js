export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1234
        },
        {
            item: 'Complete MVP',
            completed: false,
            id: 2345
        },
        {
            item: 'Complete Stretch',
            completed: false,
            id: 3456
        }
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NEW_TODO':
            return [
                ...state,
                { 
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ]
            
        case 'CLEAR_COMPLETED':
            return action.payload.filter(todo => todo.completed === false)

        case 'TOGGLE_COMPLETED':
            return state.map((todo, i) => {
        
                if(i === action.payload) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}
