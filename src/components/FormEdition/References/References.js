import React, { useContext } from 'react';
import { useInputValue } from './custom-hooks';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import EditionContext from '../EditionContext';

const References = () => {
  const { handleNameReferenceList } = useContext(EditionContext);
  const { inputValue, changeInput, clearInput } = useInputValue();

  const clearInputAndAddTodo = () => {
    clearInput();
    handleNameReferenceList(inputValue);
  };

  return (
    <div>
      <AddTodo
        inputValueName={inputValue}
        onInputChangeName={changeInput}
        onButtonClick={clearInputAndAddTodo}
      />
      <TodoList />
    </div>
  );
};

export default References;
