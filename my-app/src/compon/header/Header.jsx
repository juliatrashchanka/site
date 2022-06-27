import { NavLink } from 'react-router-dom';
import style from './Header.module.css';


function Header() {
    return (
      <div className={style.header_top}> 
        
        <div className={style.logo}>
            <a href="" className={style.logo_text}>ООО "СНЕКТРЕЙД"</a>
        </div>

        <div className={style.menu_top}>
         <nav className="menu">
            {/* <a href='#'>Главная</a> */}
            {/* <a href=''>Отзывы</a>
            <a href=''>Наши работы</a> */}
            {/* <a href=''>Документация</a> */}
            {/* <a href=''>Контакты</a> */}
            <NavLink  to="/company" className={({ isActive }) => isActive ? style.active_menu : style.not_active__menu}>Главная</NavLink>
            <NavLink  to="/feedbacks" className={({ isActive }) => isActive ? style.active_menu : style.not_active__menu}>Отзывы</NavLink>
            <NavLink  to="/projects" className={({ isActive }) => isActive ? style.active_menu : style.not_active__menu}>Наши работы</NavLink>
            <NavLink  to="/documents" className={({ isActive }) => isActive ? style.active_menu : style.not_active__menu}>Документация</NavLink>
            <NavLink  to="/contacts" className={({ isActive }) => isActive ? style.active_menu : style.not_active__menu}>Контакты</NavLink>
         </nav>
      
         </div>
      </div>

    );
  }
  export default Header;