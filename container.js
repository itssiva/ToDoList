import { connect } from 'react-redux';
import * as components from './components';
import {addToDo, toggleToDo} from './actions';


export const ToDoList = connect(
  function mapStateToProps(state) {
    return {todos: state};
  },
  function mapDispatchToProps(dispatch) {
    return {
      addToDo: text => dispatch(addToDo(text)),
      toggleToDo: id => dispatch(toggleToDo(id))
    };
  }
)(components.ToDoList);