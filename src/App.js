import React from 'react';
import TaskListItem from './components/TaskListItem';
import TaskForm from './components/TaskForm';

export default function App () {

  const [taskList, setTaskList] = React.useState([]);

  const handleDelete = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  }

  const handleAdd = (newTask) => {
    const newTaskList = [...taskList];
    newTaskList.unshift(newTask);
    setTaskList(newTaskList);
  }

  const handleModifyClick = (id, task) => {
    const taskListCopy = [...taskList];
    const newTaskList = taskListCopy.map((object) => {
      if (object.id === id) {
        return {...object, task: task};
      }
      return object;
    });
    setTaskList(newTaskList);
  }

  const handleChek = (id) => {
    const taskListCopy = [...taskList];
    const modifyTaskList = taskListCopy.map((object) => {
      if (object.id === id) {
        const isCheced = object.checked;
        return {...object, checked: !isCheced };
      }
      return object;
    });
    modifyTaskList.sort((a, b) => Number(a.checked) - Number(b.checked));
    setTaskList(modifyTaskList);
  }

  return (
    <>
      <h1>To Do List</h1>
      <ul>
        {taskList.map(
          ({id, task, checked}) => <TaskListItem id={id} key={id} 
            task={task} 
            checked={checked} 
            onDelete={() => handleDelete(id)} 
            handleModifyClick={handleModifyClick} 
            handleChek={handleChek}/>
        )}
      </ul>
      <TaskForm handleAdd={handleAdd} />
    </>
  );
}