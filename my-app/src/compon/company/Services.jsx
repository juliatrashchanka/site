import style from './Company.module.css';

let serv = [
    {
        services_text: style.services_text,
     
      text: "кровельные работы (черепица, шифер, мягкая кровля);"
    },
    {
        services_text: style.services_text,
     
      text: "все виды отделочных работ;"
    },  
    {
        services_text: style.services_text,
     
      text: "облицовку различными материалами;"
    },
    {
        services_text: style.services_text,
     
      text: "оштукатуривание, поклейку обоев, побелку стен и потолков;"
    },
    {
        services_text: style.services_text,
     
      text: "укладку напольных покрытий (ламинат, линолеум, паркет и т.д.);"
    },
    {
        services_text: style.services_text,
     
      text: "работы по утеплению и отделке фасадов (усройство легких и тяжелых систем утепления, систем на основе комплексных теплоизоляционных изделий, вентилируемых систем утепления);"
    },
    {
        services_text: style.services_text,
     
      text: "антикорозионные покрытия строительных сооружений и зданий;"
    },
    {
        services_text: style.services_text,
     
      text: "работы по монтажу деревянных конструкций;"
    },
    {
        services_text: style.services_text,
     
      text: "все виды бетонных работ;"
    },
    {
        services_text: style.services_text,
     
      text: "электромонтажные работы;"
    },
    {
        services_text: style.services_text,
     
      text: "работы по благоусройству;"
    },
    {
        services_text: style.services_text,
     
      text: "комплексные поставки электротехники, кабельно-проводниковой продукции и светотехники."
    },

]

function Services() {
    return (

        <div className={style.services_box_top}>
        <div className={style.services_box}>
          <div className={style.services_title}>Для Вас выполним:</div>
          {/* <div className={style.services_text}> */}
           <ul>
           {
                serv.map(i => <div  className={i.services_text}>
                     <li>{i.text}</li>
                     
                   
    
                </div> )
             }
            </ul>
          </div>
        </div>
    //   </div>

        );
    }
    
    export default Services;