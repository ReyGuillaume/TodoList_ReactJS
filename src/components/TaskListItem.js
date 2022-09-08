import React from 'react';
import ModifyTaskForm from './ModifyTaskForm';

function DelTask({task, checked}) {
	if (checked) {
		return (<del>{task}</del>);
	}
	return task;
}

export default function TaskListItem({id, task, checked, onDelete, handleModifyClick, handleChek}) {

	const [modifyTaskBool, setModifyTaskBool] = React.useState(false);

	if (modifyTaskBool) {
		return (<li>
			<ModifyTaskForm id={id} inputValue={task} handleModifyClick={handleModifyClick} setModifyTaskBool={setModifyTaskBool}/>
			<div className="taskActions">
				<button onClick={onDelete}>Supr</button>
			</div>
		</li>);
	}
	return (<li>
		<span className='task'>
			<input type="checkbox" onClick={() => handleChek(id)} checked={checked}></input>
			<DelTask task={task} checked={checked}/>
		</span>
		<div className="taskActions">
			<button onClick={() => setModifyTaskBool(true)}>Modifier</button>
			<button onClick={onDelete}>Supr</button>
		</div>
	</li>);
}