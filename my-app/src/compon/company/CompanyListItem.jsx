import style from './Company.module.css';
let companies = [
    {
      advantages_card: style.advantages_card,
      img_adv: style.img_adv,
      advanteges_text: style.advanteges_text,
      img_src: "https://www.prereal.com/uploads/load-imagetools.jpeg",
      text: "Индивидуальный подход к каждому объекту"
    },
    {
      advantages_card: style.advantages_card,
      img_adv: style.img_adv,
      advanteges_text: style.advanteges_text,
      img_src: "https://cdnassets.hw.net/a3/45/f1b4ba414d45862f98d2c2b7d9a8/mlcon24-c.png",
      text: "Эфективное управление персоналом"
    },
    {
      advantages_card: style.advantages_card,
      img_adv: style.img_adv,
      advanteges_text: style.advanteges_text,
      img_src: "https://thumbs.dreamstime.com/b/set-old-used-masonry-tools-rough-wooden-surface-copy-space-53228744.jpg",
      text: " Эфективное использование средств и ресурсов"
    },
    {
        advantages_card: style.advantages_card,
        img_adv: style.img_adv,
        advanteges_text: style.advanteges_text,
        img_src: "https://www.katahdincedarloghomes.com/uploads/0133-1024x683.jpg",
        text:  "Максимальная ответственность за конечные результаты"
  
        
    }
  ]

  export default function CompanyListItem () {
    return (
        <div className={style.advantages_top}>
            <div className={style.advantages}>
            {
                companies.map(i => <div  className={i.advantages_card}>
                
                <img className={i.img_adv} src={i.img_src}></img>
            
                <div className={i.advanteges_text}> {i.text}</div>
    
                </div>
                )
                }
            </div>
        </div>
    )
  }