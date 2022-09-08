import React from 'react';

export default  function ModifyTaskForm ({id, inputValue, handleModifyClick, setModifyTaskBool}) {
	const [modifyingTask, setModifyingTask] = React.useState(inputValue);

	const onChange = (event) => {
		setModifyingTask(event.target.value);
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		setModifyTaskBool(false);
		handleModifyClick(id,modifyingTask);
	}

	return (<form action="submit" onSubmit={handleSubmit}>
		<input type="text" value={modifyingTask} onChange={onChange}></input>
		<button>OK</button>
	</form>);
}