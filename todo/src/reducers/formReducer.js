import { ADD, CLEAR, TOGGLE } from './../actions/formActions';

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
    ],
    newTodo:
        {
        item: '',
        completed: false,
        id: Date.now()
    }
}

export const reducer = (state, action) => {
    switch(action.type) {
        case ADD:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now(),
                    }
                ]
            }
            
        case CLEAR:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload)
            }

        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id !== action.payload) {
                        return todo
                    }
                    return  {
                        ...todo,
                        completed: !todo.completed
                    }
                })
            }
        default:
            return state
    }
}
