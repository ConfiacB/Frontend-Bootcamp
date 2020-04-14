import React from 'react';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.Component<any, any> {
  render() {

    const array = ['1', '2', '3', '4'];
    const items = [];

    for (const value of array) {
      items.push(<TodoListItem />);
    }

    return (
      <ul>
        {items}
      </ul >
    );
  }
}