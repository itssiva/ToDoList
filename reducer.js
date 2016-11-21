import {List, Map} from 'immutable';

const init = List([]);

export default function(todos=init, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
      break;

    case 'TOGGLE_TODO':
      return todos.map((element, index) => {
        if (element.get('id') === action.payload.id) {
          return element.update('isDone', isDone => !isDone);
        } else {
          return element;
        }
      });
      break;

    default:
      return todos;
      break;
  }
}