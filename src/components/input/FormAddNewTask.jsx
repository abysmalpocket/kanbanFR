import clsx from 'clsx'
import css from './Form.module.css'
import { useState } from 'react'

const FormAddNewTask = props => {
	const {addNewTask} = props
	const [values, setValues] = useState({
		title: '',
		description: ''
	})

	const handleChange = (e) => {
		const fielName = e.target.name
		setValues({...values, [fielName]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (values.title) {
			addNewTask(values.title, values.description)
		}
	}
	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input
				className={css.input}
				id='taskTitle'
				name='title'
				type='text'
				placeholder='name'
				value={values.title}
				onChange={handleChange}
			/>
		</form>
	)
}

export default FormAddNewTask;
