import css from './Header.module.css'

const Header = () => {
	return (
		<header className={css.header}>
			<h1 className={css.title}>My Awesome Kanban Board</h1>
			<div className={css.avatar}>
        <div>
          <img src="./img/user-avatar.svg" alt="my__face" />
        </div>
        <img src="./img/arrowBottom.svg" alt="arrow__bott" />
      </div>
		</header>
	)
}

export default Header
