import React, { useContext } from 'react';
import { useInputValue } from './custom-hooks';
import Layout from './Layout';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import EditionContext from '../EditionContext';

const References = (props) => {
  const { handleNameReferenceList } = useContext(EditionContext);
  const { inputValue, changeInput, clearInput } = useInputValue();

  const clearInputAndAddTodo = () => {
    clearInput();
    handleNameReferenceList(inputValue);
  };

  return (
    <Layout>
      <AddTodo
        inputValueName={inputValue}
        onInputChangeName={changeInput}
        onButtonClick={clearInputAndAddTodo}
      />
      <TodoList />
    </Layout>
  );
};

export default References;
