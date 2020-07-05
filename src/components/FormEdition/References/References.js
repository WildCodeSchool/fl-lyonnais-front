import React, { memo, useContext } from 'react';
import { useInputValue, useTodos } from './custom-hooks';
import Layout from './Layout';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import EditionContext from '../EditionContext';

const References = (props) => {
  const { handleNameReferenceList, setNameReferenceList } = useContext(EditionContext);
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = () => {
    clearInput();
    addTodo(inputValue);
    handleNameReferenceList(inputValue);
  };

  return (
    <Layout>
      <AddTodo
        inputValueName={inputValue}
        onInputChangeName={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPressName={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
    </Layout>
  );
};

export default References;
