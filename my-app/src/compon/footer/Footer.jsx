import style from './Footer.module.css';
function Footer() {
    return (
        <div className={style.footer}> 
      
      
        <div className='address'><p>222310, Минская обл., г. Молодечно, ул. Великий Гостинец, 143б, пом. №19, каб.559 </p></div>
        
        <div className='contact'>
           Контакты:<br />
           8 (029) 65-08-105<br />
           8 (0176) 75-95-15 <br />
           
        </div>

        <div className='mail'><p>email: cononenko.yury@yandex.by</p></div>

      </div>

    );
  }
  export default Footer;