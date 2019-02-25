import { observer } from 'mobx-react';
import React from 'react';
import PropTypes from 'prop-types';
import { TodoList } from '..';
import { Button, ButtonText, Screen, TextBox } from './styles';

const buttonText = `Add`;
const placeholderText = `Add new item`;

@observer
class App extends React.Component {
  static propTypes = {
    store: PropTypes.shape({
      deleteTodoListItem: PropTypes.func.isRequired,
      putTodoListItem: PropTypes.func.isRequired,
      toggleTodoListItem: PropTypes.func.isRequired,
      state: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        todoListItems: PropTypes.array.isRequired
      })
    }).isRequired
  };
  static defaultProps = {
    store: {
      deleteTodoListItem: () => {},
      putTodoListItem: () => {},
      toggleTodoListItem: () => {},
      state: PropTypes.any.isRequired
    },
  };

  state = {
    textBoxValue: ''
  };

  onChangeText = (event) => {
    const textBoxValue = event.target.value;

    if (event.keyCode) {
      if (event.keyCode === 13) {
        return this.onClickAddButton();
      }
      return false;
    }

    this.setState({ textBoxValue });
  }

  onClickAddButton = () => {
    const { putTodoListItem } = this.props.store;
    const { textBoxValue } = this.state;

    if (textBoxValue.length > 0) {
      this.setState({ textBoxValue: '' });

      putTodoListItem({
        text: textBoxValue,
        completed: false
      });
    }
  };

  onClickDeleteButton = (item, event) => {
    const { deleteTodoListItem } = this.props.store;

    return deleteTodoListItem(item);
  };

  onClickListItem = (item, event) => {
    const { toggleTodoListItem } = this.props.store;

    if (event.target.localName !== 'button') {
      return toggleTodoListItem(item);
    }
  }

  render() {
    const {
      onChangeText,
      onClickAddButton,
      onClickDeleteButton,
      onClickListItem,

      props: {
        store
      },
      state: {
        textBoxValue
      }
    } = this;

    return (
      <Screen>
        <TodoList
          todoList={store.state.get()}
          onClickDeleteButton={onClickDeleteButton}
          onClickListItem={onClickListItem}
        />
        <TextBox
          autoFocus
          onChange={onChangeText}
          onKeyDown={onChangeText}
          placeholder={placeholderText}
          value={textBoxValue}
        />
        <Button onClick={onClickAddButton}>
          <ButtonText>{buttonText}</ButtonText>
        </Button>
      </Screen>
    );
  }
}

export { App };
