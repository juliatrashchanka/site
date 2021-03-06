import style from './Company.module.css';

function Inf() {
    return (


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
        
    );
}

export default Inf;