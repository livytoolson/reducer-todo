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
            return {
                ...state,
                todos: [...state.todos, {id: state.todos.newDate()}]
            };
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todo.map((todo) => 
                todo.id === action.id 
                ? {...todo, completed: !todo.completed}
                : todo,
                );
            };
        default:
            return state
    }
}
