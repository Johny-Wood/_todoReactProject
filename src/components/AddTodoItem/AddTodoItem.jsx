import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './AddTodoItem.scss';


const AddTodoItem = (props) => {
  const [taskText, setTaskText] = useState('');


  const handleAddTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: Math.round(Math.random() * 10000),
      text: taskText,
      priority: props.priority
      // isCheked: props.cheked
    }

    props.handleTask(newTask);
    setTaskText('');
  }


  return (
    <form className="to-do__form" onSubmit={handleAddTask}>
      <input
        className="to-do__form-input"
        type="text"
        placeholder="Добавить важных дел"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button
        className="to-do__form-button to-do__button"
      />
    </form>
  )
}


export default AddTodoItem;



