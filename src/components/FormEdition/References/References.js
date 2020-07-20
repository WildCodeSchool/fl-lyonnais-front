import React, { useContext } from 'react';
import { useInputValue } from './custom-hooks';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import EditionContext from '../EditionContext';

const References = () => {
  const { handleNameReferenceList } = useContext(EditionContext);
  const { inputValue, changeInput, clearInput } = useInputValue();

  const clearInputAndAddTodo = () => {
    handleNameReferenceList(inputValue);
    clearInput();
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
