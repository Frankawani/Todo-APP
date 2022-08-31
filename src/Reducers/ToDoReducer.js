const INITIAL_STATE = {
  toDoList: [],
  filteredList:[]
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
        filteredList: [
          ...state.filteredList,
          {
            id: state.filteredList.length + 1,
            todo: action.payload.todo,
            isCompleted: false,
          },
        ]
      };
    }

    case "CHECK_TODO": {
      const itemId = action.payload.id;
      return {
        ...state,
        toDoList: state.toDoList.map((todo) =>
          todo.id === itemId
            ? { ...todo, isCompleted: !action.payload.isCompleted }
            : todo
        ),
        filteredList: state.filteredList.map((todo) =>
          todo.id === itemId
            ? { ...todo, isCompleted: !action.payload.isCompleted }
            : todo
        ),
      };
    }

    case "REMOVE_TODO": {
      const itemId = action.payload.id;
      return {
        ...state,
        toDoList: state.toDoList.filter((todo) => todo.id !== itemId),
        filteredList: state.filteredList.filter((todo) => todo.id !== itemId)
      };
    }

    case "UPDATE_TODOLIST": {
      return {
        ...state,
        toDoList: action.payload,
        filteredList: action.payload,

      };
    }
    case 'ALL': {
      return {...state,
        filteredList: [...state.toDoList]
      }
  }

    case 'ACTIVE': {
      return {
        ...state,
        filteredList: state.toDoList.filter((todo) => todo.isCompleted === false )
    } }

    case 'COMPLETED': {
      return {
        ...state,
        filteredList: state.toDoList.filter((todo) => todo.isCompleted === true )}
    } 

    case 'CLEAR_COMPLETED': {
      return {
        ...state,
        toDoList: state.filteredList.filter((todo) => todo.isCompleted !== true ),
        filteredList: state.filteredList.filter((todo) => todo.isCompleted !== true )}
    } 


    default:
      return state;
  }
}

export default ToDoReducer;
