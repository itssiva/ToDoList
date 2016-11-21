import React from 'react';
import {render} from 'react-dom';
import {ToDoList} from './container';
import {List, Map} from 'immutable';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);

// const dummyTodos = List([
//   Map({ id: 0, isDone: true,  text: 'make components' }),
//   Map({ id: 1, isDone: false, text: 'design actions' }),
//   Map({ id: 2, isDone: false, text: 'implement reducer' }),
//   Map({ id: 3, isDone: false, text: 'connect components' })
// ]);

render(
  <Provider store={store}>
    <ToDoList />
  </Provider>,
  document.getElementById('app')
);
