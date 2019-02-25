import { action, observable, reaction } from 'mobx';
import { TodoListItemModel } from '../../models';
import { api } from '../../fakeAsyncApi';

export class TodoListStore {
  static fromJS(object) {
    const todoStore = new TodoListStore();

    todoStore.state.todoListItems = object.todoListItems.map(item => TodoListItemModel.fromJS(todoStore, item));
    todoStore.state.isLoading = false;
    return todoStore;
  }

  toJS() {
    return this.state.todoListItems.map(item => item.toJS());
  }

  subscribeServerToStore() {
    reaction(
      () => this.toJS(),
      state => api.get('/todos').then(res => this.state.set({
        isLoading: false,
        todoListItems: res.data
      }))
    );
  }

  state = observable.box({
    isLoading: false,
    todoListItems: []
  });

  @action
  deleteTodoListItem = async item => {
    let state = this.state.get();
    const { todoListItems } = state;

    this.state.set({
      isLoading: true,
      todoListItems
    });

    try {
      const res = await api.delete('/todos', item.id);
      const todoListItems = res.data;

      this.state.set({
        isLoading: false,
        todoListItems
      });
    } catch(error) {
      console.log(error.message);
    }
  };

  @action
  putTodoListItem = async item => {
    let state = this.state.get();
    const { todoListItems } = state;

    this.state.set({
      isLoading: true,
      todoListItems
    });

    try {
      const res = await api.put('/todos', new TodoListItemModel(this, item));
      const todoListItems = res.data;

      this.state.set({
        isLoading: false,
        todoListItems
      });
    } catch(error) {
      console.log(error.message);
    }

    return this.state.get().todoListItems;
  };

  @action
  toggleTodoListItem = async item => {
    const completed = !item.completed.get();
    const id = item.id;
    const text = item.text.get();

    return this.putTodoListItem({ completed, id, text });
  };

}
