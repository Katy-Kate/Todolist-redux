const initState = {
  todos: [
    { id: 0, content: "buy milk" },
    { id: 1, content: "buy tea" },
    { id: 2, content: "buy coffe" }
  ],
  posts: [],
  newTodo: {
    content: ""
  }
};

const rootReduser = (state = initState, action) => {
  console.log(action);
  if (action.type === "SET_POSTS") {
    return {
      ...state,
      posts: action.posts
    };
  } else if (action.type === "DELETE_TODO") {
    let newTodos = state.todos.filter(todo => {
      return todo.id !== action.id;
    });
    return {
      ...state,
      todos: newTodos
    };
  } else if (action.type === "ADD_TODO") {
    let id = Math.floor(Math.random()*1000);
    return {
      ...state,
      todos: [...state.todos, { id, ...action.todo }]
    };
  } else if (action.type === "HANDLE_TODO_CONTENT") {
    return {
      ...state,
      newTodo: { ...state.newTodo, content: action.content }
    };
  }
  return state;
};

export default rootReduser;
