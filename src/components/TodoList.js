import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TodoList = () => {
  const { toDoList, isLight } = useSelector((state) => ({
    ...state.ToDoReducer,
    ...state.ThemeReducer,
  }));
  const [todo, setTodo] = useState(toDoList);
  const dispatch = useDispatch();
  
  if (toDoList.length === 0) {
    return <h1 className="text-light-grey mt-5">List is empty</h1>;
  }
  
  function handleOnDragEnd(result) {
    if(!result.destination) return;
    console.log(result);
    const items = Array.from(toDoList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    console.log(items);
    dispatch({
      type: "UPDATE_TODOLIST",
      payload: items
    });
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`h-fit ${
              isLight
                ? "bg-white divide-slate-300"
                : "bg-very-dark-desaturated-blue divide-slate-700"
            } mt-8 rounded-sm shadow-lg divide-y flex flex-col`}
          >
            {toDoList.map((item, index) => {
                return (
                  <Draggable
                    key={item.id}
                    draggableId={item.todo}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <TodoItem {...item} />
                      </li>
                    )}
                  </Draggable>
                );
              })
              }
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
