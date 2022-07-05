
import style from './Company.module.css';
import CompanyListItem from './CompanyListItem';
import Inf from './Inf';
import Services from './Services';

function Company() {
    return (
    
  <div className='company'> 
   
    <div className={style.main_box}>
      <div className={style.main_text}>Строим и улучшаем!</div>
    </div>

    <CompanyListItem />
  
    <Inf />


    <div className={style.dop}></div>

    <Services />



  </div>

);
}
  export default Company;