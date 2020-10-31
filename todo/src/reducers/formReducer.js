export const initialState = [
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

export const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state
    }
}
