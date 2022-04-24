import React from 'react';
import ReactDOM from 'react-dom/client';
import './TodoTask.scss';



const TodoTask = (props) => {

  const handleCheckBoxChange = (e) => {
    console.log(e.target.checked);
    props.onCheckBoxChange(e.target.checked)
  }

  const handleDeleteTask = (e) => {
    props.deleteTask(props.id)
  }

  return (
    <div className="to-do__task">
      <label className="to-do__task-content">
        <input
          className="to-do__task-checkbox"
          type="checkbox"
          onChange={handleCheckBoxChange}
        />
        {props.taskText}
      </label>
      <button
        className="to-do__task-button to-do__button"
        onClick={handleDeleteTask}
      />
    </div>
  )
}

export default TodoTask;