import React from 'react';


export function ToDo(atts) {
  const { todo } = atts;
  if (todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}


export function ToDoList(props) {
  const { todos, addToDo, toggleToDo } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = '';
      addToDo(text);
    }
  }

  const toggleClick = id => event => toggleToDo(id);


  return (
    <div className='todo'>
      <input type="text"
             className="todo__entry"
             placeholder='Add ToDo'
             onKeyDown={onSubmit}/>
      <ul className="todo__list">
        {todos.map(t => (
          <li key={t.get('id')}
              className="todo__item"
              onClick={toggleClick(t.get('id'))}>
            <ToDo todo={t.toJS()}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
