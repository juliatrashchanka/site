import { NavLink } from 'react-browser-router';
import style from './Header.module.css';


function Header() {
    return (
      <div className={style.header_top}> 
        
        <div className={style.logo}>
            <a href="" className={style.logo_text}>ООО "СНЕКТРЕЙД"</a>
        </div>

        <div className={style.menu_top}>
         <nav className={style.menu}>
            <a href='#'>Главная</a>
            {/* <NavLink  to="/main" className={({ isActive }) => isActive ? style.activeClassName : undefined}> Главная </NavLink> */}
            <a href=''>Отзывы</a>
            <a href=''>Наши работы</a>
            <a href=''>Документация</a>
            {/* <a href=''>Контакты</a> */}
            <NavLink  to="/contact" className={({ isActive }) => isActive ? style.activeClassName : style.menu}>Контакты</NavLink>
         </nav>
      
         </div>
      </div>

    );
  }
  export default Header;