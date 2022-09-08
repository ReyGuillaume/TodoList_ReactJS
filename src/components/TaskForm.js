import React from 'react';

export default function TaskForm({handleAdd}) {

	const [inputContent, setInputContent] = React.useState("");

	const handleInput = (event) =>{
		setInputContent(event.target.value);
	}

  const handleSubmit = (event) => {
	event.preventDefault();
	if (inputContent !== "") {
		const id = new Date().getTime();
		const task = inputContent;
		const checked = false;
		const newTask = {id, task, checked};
		handleAdd(newTask);
		setInputContent("");
	}
  }

	return (
		<div className='TaskForm'>
    	<h2>Ajouter une tâche</h2>
		<form action="submit" onSubmit={handleSubmit}>
			<input type="text" placeholder="Ajouter une tâche" onChange={handleInput} value={inputContent}></input>
			<button>Ajouter</button>
		</form>
		</div>
	);
}