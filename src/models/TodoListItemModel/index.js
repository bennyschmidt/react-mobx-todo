import { observable } from 'mobx';

export class TodoListItemModel {
  id;
  store;
  completed;
  text;

  constructor(todoListStore, todoListItem) {
    const { completed, id, text } = todoListItem;

    this.store = observable.box(todoListStore);
    this.completed = observable.box(completed);
    this.text = observable.box(text);
    this.id = id;
  }

  toJS() {
    const { completed, id, text } = this;

    return { completed, id, text };
  }

  static fromJS(store, object) {
    const { completed, id, text } = object;

    return new TodoListItemModel(store, id, text, completed);
  }
}
