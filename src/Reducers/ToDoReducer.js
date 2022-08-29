const INITIAL_STATE = {
    toDoList: []
}

function ToDoReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_TODO' : {
            return {
                ...state,
                toDoList : [...state.toDoList, 
                    {
                        id: state.toDoList.length + 1,
                        todo: action.payload.todo,
                        status: 'active'
                    }]
            }
        }
    }
    return state;
}

export default ToDoReducer;