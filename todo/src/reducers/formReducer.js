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
    ]
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
            return{
                ...state,
                todos: state.todos.filter(item => item.completed === false)
           }

        case TOGGLE:
            return {
                ...state,
                    todos: state.todos.map(item => 
                    item.id === action.payload ? {...item, completed: !item.completed } : item    
                    )
               }
        default:
            return state
    }
}
