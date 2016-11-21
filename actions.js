const uid = () => Math.random().toString(34).slice(2);

export function addToDo(text) {
  return {
    type: "ADD_TODO",
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
}

export function toggleToDo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id: id
    }
  }
}
