
import style from './Company.module.css';

function Company() {
    return (
    
  <div className='company'> 
   
    <div className={style.main_box}>
      <div className={style.main_text}>Строим и улучшаем!</div>
    </div>







    <div className={style.advantages_top}>
      <div className={style.advantages}>
        {/* <div  className={style.advantages_box}> */}
          <div  className={style.advantages_card}>
           
            <img className={style.img_adv} src={  "https://www.prereal.com/uploads/load-imagetools.jpeg"}></img>
            
            <div className={style.advanteges_text}> Индивидуальный подход к каждому объекту</div>
        
         </div>

         <div  className={style.advantages_card}>
            <img className={style.img_adv} src={  "https://cdnassets.hw.net/a3/45/f1b4ba414d45862f98d2c2b7d9a8/mlcon24-c.png"}></img>
           
            
            <div className={style.advanteges_text}> Эфективное управление персоналом</div>
         </div>

         <div  className={style.advantages_card}>
            <img className={style.img_adv} src={ 'https://thumbs.dreamstime.com/b/set-old-used-masonry-tools-rough-wooden-surface-copy-space-53228744.jpg'}></img>
             

            <div className={style.advanteges_text}> Эфективное использование средств и ресурсов</div>
         </div>

         <div  className={style.advantages_card}>
             <img className={style.img_adv} src={  "https://www.katahdincedarloghomes.com/uploads/0133-1024x683.jpg"}></img>
              
            
             <div className={style.advanteges_text}> Максимальная ответственность за конечные результаты</div>
         </div>

        </div>
      

    </div>


  

    <div className={style.company_inf}>
      
      <img className={style.inf_img} src={  "https://www.homestratosphere.com/wp-content/uploads/2018/10/woodworking-tools-100218-min.jpg"}></img>
      {/*
      https://www.prereal.com/uploads/load-imagetools.jpeg */}
      <div className={style.inf_text_box}>
        <div className={style.inf_text__title}><h2>О компании</h2></div>
        <div className={style.inf_text}>
          <p>ООО "Снектрейд" - надежное строительное предприятие, которое предоставляет услуги в сфере ремонтов, строительства, реконструкции.</p>
          <p>Наши работники - опытные строители, инженеры и прорабы, которые имеют высшее строительное образование, допуск к специализированным работам, отлично выполняют любые строительные работы.</p>
          <p>Главная задача компании - обеспечение качества в строительстве и производстве. Поэтому мы тщательно отбираем поставщиков сырья и материалов для наших объектов, и контролируем наших работников.</p>
          <p>Предоставляем весь комплекс строительных работ. </p>
          
          </div>
      </div>

    </div>

    <div className={style.dop}></div>


    <div className={style.services_box_top}>
      <div className={style.services_box}>
        <div className={style.services_title}>Для Вас выполним:</div>
        <div className={style.services_text}>
         <ul>
          <li>кровельные работы (черепица, шифер, мягкая кровля);</li>
          <li>все виды отделочных работ;</li>
          <li>облицовку различными материалами;</li>
          <li>оштукатуривание, поклейку обоев, побелку стен и потолков;</li>
          <li>укладку напольных покрытий (ламинат, линолеум, паркет и т.д.);</li>
          <li>работы по утеплению и отделке фасадов (усройство легких и тяжелых систем утепления, систем на основе комплексных теплоизоляционных изделий, вентилируемых систем утепления);</li>
          <li>антикорозионные покрытия строительных сооружений и зданий;</li>
          <li>работы по монтажу деревянных конструкций;</li>
          <li>все виды бетонных работ;</li>
          <li>электромонтажные работы;</li>
          <li>работы по благоусройству;</li>
          <li>комплексные поставки электротехники, кабельно-проводниковой продукции и светотехники.</li>
          </ul> 
        </div>
      </div>
    </div>


  </div>

);
}
  export default Company;