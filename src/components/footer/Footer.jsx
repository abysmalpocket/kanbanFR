import css from './Footer.module.css'

const Footer = props => {
	return (
		<footer className={css.footer}>
			<div className={css.left1}>
        <div>
          <p>Active Tasks:</p>
          {/* <p>{changesTask}</p> */}
        </div>
        <div>
          <p>Finished Tasks:</p>
          {/* <p>{arrayTask[3].length}</p> */}
        </div>
		</div>
			<div className={css.counts} />
			<div className={css.copy}>
				<p>Kanban Board by Denis, 23 y.o</p> 
			</div>
		</footer>
	)
}

export default Footer
