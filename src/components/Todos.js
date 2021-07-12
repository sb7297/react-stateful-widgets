import React, { useState } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState([
    {id: 1, text: 'Create Todos component file', complete: true},
    {id: 2, text: 'Finish Todos stretch goal', complete: false}
  ]);

  const incompleteStyle = {
    margin: '0.5em',
    color: 'red',
  };

  const completeStyle = {
    margin: '0.5em',
    textDecoration: 'line-through'
  };

	return (
		<div className='widget-todos container'>
      <h2>Todos</h2> 
      <div className='todos'>
        {
          todos.map(item => 
            <div className='todo' key={item.id} style={item.complete ? completeStyle : incompleteStyle}>
              {item.text}
            </div>
          )
        }
      </div>
		</div>
	);
}