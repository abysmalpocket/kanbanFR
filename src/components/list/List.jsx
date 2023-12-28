
import { useState } from 'react'
import { LIST_TYPES, LIST_COLORS } from '../../config'
import css from './List.module.css'
import FormAddNewTask from '../input/FormAddNewTask'

const List = props => {
	const {title, type, tasks, addNewTask} = props
	const [isInputVisible, setInputVisible] = useState(false)

	const handlerChange = () => {
		setInputVisible(!isInputVisible)
	}

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.map(task => {
				return(
					<div key={task.id} className={css.task}>{task.title}</div>
				)
			})}
			<div>
			<button className={css.addButton} onClick={handlerChange}>
			<img src="./img/Plus.svg" alt="Plus" />
			Add card
			</button>
			</div>
			{type === LIST_TYPES.BACKLOG  && isInputVisible && (
				<FormAddNewTask addNewTask={addNewTask} />
			)}
			</div>
	)
}

export default List
