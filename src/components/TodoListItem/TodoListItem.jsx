import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton, Item, ItemText } from './styles';

const closeButtonText = `✕`;

export class TodoListItem extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      completed: PropTypes.object.isRequired,
      id: PropTypes.number.isRequired,
      text: PropTypes.object.isRequired
    }),

    onClickDeleteButton: PropTypes.func.isRequired,
    onClickListItem: PropTypes.func.isRequired
  };
  static defaultProps = {
    item: {
      completed: false,
      id: -1,
      text: ''
    },

    onClick: () => {}
  };

  render() {
    const {
      item: {
        completed,
        text
      },

      onClickDeleteButton,
      onClickListItem
    } = this.props;

    return (
      <Item onClick={onClickListItem}>
        <ItemText completed={completed.get()}>{text.get()}</ItemText>
        <CloseButton onClick={onClickDeleteButton}>{closeButtonText}</CloseButton>
      </Item>
    );
  }
}
