export const CREATE_TODO = "CREATE_TODO";
//action creator
export const createTodo = ({ inputValue, inputTime, inputDate }) => {
  const text = inputValue;
  const time = inputTime;
  const date = inputDate;

  return {
    type: CREATE_TODO,
    payload: {
      text,
      time,
      date,
    },
  };
};

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markTodoAsCompleted = (text) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { text },
});

export const REMOVE_COMPLETED_TODOS = "REMOVE_COMPLETED_TODOS";
export const removeCompletedTodos = () => ({
  type: REMOVE_COMPLETED_TODOS,
  payload: null,
});

export const CHECK_OVERDUE_TODOS = "CHECK_OVERDUE_TODOS";
export const checkOverdueTodos = () => ({
  type: CHECK_OVERDUE_TODOS,
  payload: null,
});
