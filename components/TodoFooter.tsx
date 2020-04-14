import React from 'react';

export const TodoFooter = (props: any) => {
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;
  let affichage;
  itemCount === 1 ? affichage = 'item' : affichage = 'items';
  return (
    <footer>
      <span> {itemCount} {affichage} left</span>
      <button className="submit">Clear Completed</button>
    </footer>
  );
};