import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoTask from '../TodoItem/TodoTask';
import './ListTodoItems.scss';

const ListTodoItems = (props) => {
  const tasksList = [];


  const deleteTask = (id) => {
    const res = props.tasks.filter(task => task.id !== id)
    console.log(props.tasks);
    console.log(res);
    props.onDelTask(res);
  }

  const doneTask = (status) => {
    console.log(status);
  }


  if (props.priority === 'low') {
    const lowPriorityTasks = props.tasks.filter(priority => priority.priority === 'low');

    lowPriorityTasks.forEach(task => {
      tasksList.push(
        <TodoTask
          taskText={task.text}
          key={task.id}
          id={task.id}
          deleteTask={deleteTask}
          onCheckBoxChange={doneTask}
        />
      )
    });
  }

  if (props.priority === 'high') {
    const highPriorityTasks = props.tasks.filter(priority => priority.priority === 'high');

    highPriorityTasks.forEach(task => {
      tasksList.push(
        <TodoTask
          taskText={task.text}
          key={task.id}
          id={task.id}
          deleteTask={deleteTask}
          onCheckBoxChange={doneTask}
        />
      )
    });
  }

  return (
    <div>
      {tasksList}
    </div>
  )
}

export default ListTodoItems;

