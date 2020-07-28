import React, { useContext } from 'react';
import { List, Paper } from '@material-ui/core';
import TodoListItem from './TodoListItem';
import EditionContext from '../EditionContext';

const TodoList = (props) => {
  const { references } = useContext(EditionContext);
  return (
    <>
      {references.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <List style={{ overflow: 'auto', display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center' }}>
            {references.map((reference, idx) => (
              <TodoListItem
                reference={reference}
                key={references.id}
                onButtonClick={() => props.onItemRemove(idx)}
                onCheckBoxToggle={() => props.onItemCheck(idx)}
              />
            ))}
          </List>
        </Paper>
      )}
    </>
  );
};

export default TodoList;
