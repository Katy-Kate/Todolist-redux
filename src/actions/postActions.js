export const deleteTodo = id => {
  return { type: "DELETE_TODO", id: id };
};
export const setPosts = posts => {
  return { type: "SET_POSTS", posts: posts };
};

export const addToDO = todo => {
  return { type: "ADD_TODO", todo: todo };
};
export const handleChangeTodoContent = content => {
  return { type: "HANDLE_TODO_CONTENT", content: content };
};
