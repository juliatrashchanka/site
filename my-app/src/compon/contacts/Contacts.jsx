import style from './Contacts.module.css'


function Contacts() {
    return (
    

  <div className={style.contacts}> 
   
    <div className={style.contacts_box}>
       {/* <div className={style.contacts_text}> sdvgtgj<b /></div> */}
         
       <div className='address'><p>222310, Минская обл., г. Молодечно, ул. Великий Гостинец, 143б, каб.559 </p></div>
        
        <div className='contact'>
         <p>  Контакты:<br />
           8 (029) 65-08-105<br />
           8 (0176) 75-95-15 <br /></p>
           
        </div>

        <div className='mail'><p>email: cononenko.yury@yandex.by</p></div>
        
    </div>
{/* <ymaps className={style.maps} url("")></ymaps> */}
    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2328.281937209898!2d26.863411218177855!3d54.29896512754684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc744fd874e9a1%3A0xde4e1277a4ad250d!2svulica%20Vialiki%20Hasciniec%20143b%2C%20Maladzie%C4%8Dna!5e0!3m2!1sen!2sby!4v1656413392734!5m2!1sen!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  </div>

);
}
  export default Contacts;