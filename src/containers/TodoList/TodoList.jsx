import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItem } from '../../components';
import { List, Loading, LoadingText, Screen } from './styles';

const loadingText = `L O A D I N G . . .`;

export class TodoList extends React.Component {
  static propTypes = {
    onClickDeleteButton: PropTypes.func.isRequired,
    onClickListItem: PropTypes.func.isRequired,
    todoList: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
      todoListItems: PropTypes.array.isRequired
    }).isRequired
  };
  static defaultProps = {
    onClickDeleteButton: () => {},
    onClickListItem: () => {},
    todoList: {
      isLoading: true,
      todoListItems: []
    }
  };

  onClickDeleteButton = item => (event) => this.props.onClickDeleteButton(item, event);

  onClickListItem = item => (event) => this.props.onClickListItem(item, event);

  render() {
    const {
      onClickDeleteButton,
      onClickListItem,

      props: {
        todoList: {
          isLoading,
          todoListItems
        }
      }
    } = this;

    return (
      <Screen>
        {
          isLoading
          ? (
            <Loading>
              <LoadingText>{loadingText}</LoadingText>
            </Loading>
          )
          : (
            <List>
              {
                todoListItems.map((li, i) => <TodoListItem
                  key={li.id}
                  item={li}
                  onClickDeleteButton={onClickDeleteButton(li)}
                  onClickListItem={onClickListItem(li)}
                />)
              }
            </List>
          )
        }
      </Screen>
    );
  }
}
