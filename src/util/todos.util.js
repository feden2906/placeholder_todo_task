export const sortTodos = (arr) => {
  return arr.sort((a, b) => a.completed - b.completed || b.id - a.id);
}
