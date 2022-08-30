const INITIAL_STATE = {
  toDoList: [],
};

function ToDoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        toDoList: [
          ...state.toDoList,
          {
            id: state.toDoList.length + 1,
            todo: action.payload.todo,
            isCompleted: false,
          },
        ],
      };
    }
    
    case "CHECK_TODO": {
      const itemId = action.payload.id;
      return {
        ...state,
        toDoList: state.toDoList.map((todo) =>
          todo.id === itemId
            ? { ...todo, isCompleted: action.payload.isCompleted }
            : todo
        ),
      };
    }
    default:
      return state;
  }
}

export default ToDoReducer;
