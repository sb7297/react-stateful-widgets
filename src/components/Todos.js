import React, { useState } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Create Todos component file', complete: true},
    {id: 2, text: 'Finish Todos stretch goal', complete: false}
  ]);

  const [inputValue, setInputValue] = useState('');

  const incompleteStyle = {
    margin: '0.5em',
    color: 'red',
  };

  const completeStyle = {
    margin: '0.5em',
    textDecoration: 'line-through'
  };

  const toggleComplete = id => {
    setTodos(todos.map(item => {
      if (item.id === id) {
        const ret = { ...item };
        ret.complete = !ret.complete;
        return ret;
      } else {
        return item;
      }
    }));
  };

  const nextId = () => {
    let maxId = 0;
    todos.forEach(item => {
      maxId = item.id > maxId ? item.id : maxId;
    });
    return maxId+1;
  };

  const addTodo = () => {
    setTodos([ ...todos, {
      id: nextId(),
      text: inputValue,
      complete: false
    }]);
  }

	return (
		<div className='widget-todos container'>
      <h2>Todos</h2> 
      <div className='todos'>
        {
          todos.map(item => 
            <div
            className='todo'
            key={item.id}
            style={item.complete ? completeStyle : incompleteStyle}
            >
              <span style={ {cursor: 'pointer'} } onClick={() => toggleComplete(item.id)}>➼ </span> 
              {item.text}
            </div>
          )
        }
      </div>
      <div className='todoInput'>
        <input type='text' onChange={evt => setInputValue(evt.target.value)}/>
        <button onClick={addTodo}>Create</button>
      </div>
		</div>
	);
}