import React from 'react';
import ReactDOM from 'react-dom/client';
import './Todo.scss';
import App from '../../App';
import AddTodoItem from '../AddTodoItem/AddTodoItem';
import ListTodoItems from '../ListTodoItems/ListTodoItems';
import useLocalStorage from '../../hooks/useLocalStorage';


const PRIORITY = {
  high: 'high',
  low: 'low'
}


const Todo = (props) => {
  const [tasks, setTasks] = useLocalStorage('Todos', []);


  const handleAddTask = (task) => {
    setTasks([task, ...tasks])
  }

  const handleDelTask = (task) => {
    setTasks(task)
  }
  

  return (
    <div className='to-do'>
      <div>
        <span className='to-do__subtitle'>high</span>
        <AddTodoItem
          handleTask={handleAddTask}
          priority={PRIORITY.high}
        />
        <ListTodoItems
          tasks={tasks}
          priority={PRIORITY.high}
          onDelTask={handleDelTask}
        />
      </div>
      <div>
        <span className='to-do__subtitle'>low</span>
        <AddTodoItem
          handleTask={handleAddTask}
          priority={PRIORITY.low}
        />
        <ListTodoItems
          tasks={tasks}
          priority={PRIORITY.low}
          onDelTask={handleDelTask}
        />
      </div>
    </div>
  )
}


export default Todo;

