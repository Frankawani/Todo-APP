import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import TodoItem from "./TodoItem";
import Footer from "./Footer";

/**
 * List of all added todo items with cehck & delete buttons
 * @returns HTML of TODO list component
 */
const TodoList = () => {
  const { toDoList, isLight, filteredList } = useSelector((state) => ({
    ...state.ToDoReducer,
    ...state.ThemeReducer,
  }));

  const dispatch = useDispatch();

  /**
   * A function that allows to change an item position after the drag & drop action 
   * @param {Object} result - object of drag & drop item properties
   * @returns {Array} of new reordered items
   */
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(toDoList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch({
      type: "UPDATE_TODOLIST",
      payload: items,
    });
  }

  if (toDoList.length === 0) {
    return <h1 className="text-light-grey mt-5">List is empty</h1>;
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`h-fit overflow-hidden ${
              isLight
                ? "bg-white divide-slate-300"
                : "bg-very-dark-desaturated-blue divide-slate-700"
            } mt-9 rounded-sm shadow-lg divide-y flex flex-col rounded-sm`}
          >
            {filteredList.map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.todo} index={index}>
                  {(provided) => (
                    <li
                    className={isLight ? "bg-white" : "bg-very-dark-desaturated-blue"}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <TodoItem {...item} />
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
            <Footer/>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
