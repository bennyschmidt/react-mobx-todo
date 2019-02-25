import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './containers';
import { TodoListStore } from './stores';
import * as serviceWorker from './serviceWorker';

const initialState = {
  todoList: {
    isLoading: false,
    todoListItems: []
  }
};
const todoListStore = TodoListStore.fromJS(initialState.todoList);

todoListStore.subscribeServerToStore();

ReactDOM.render(<App store={todoListStore} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
