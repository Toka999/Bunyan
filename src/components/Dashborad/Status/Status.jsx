import CardStatus from "../../Ui/CardStatus/CardStatus"
import  styles  from "../../Ui/CardStatus/CardStatus.module.css";

function Status(){

    const cardsDetails=[
        {counter:120, title:"Projects",icon:<i class={`${styles.IconStyle} fa-solid fa-building`}></i>},
        {counter:150, title:"Users",icon:<i class={`${styles.IconStyle} fa-solid fa-users`}></i>},
        {counter:200, title:"Developers",icon:<i class={`${styles.IconStyle} fa-solid fa-hammer`}></i>},
        {counter:50, title:"Blogs",icon:<i class={`${styles.IconStyle} fa-solid fa-newspaper`}></i>}

    ];
    return (
        <section className="w-100 h-100">
            <div className="container ">
                <div className="row mt-1 mb-1 ">
                    {/*default:12    medium and above: 3 columns*/ }
                    {cardsDetails.map((element, index)=>{
                        return (
                        <div className="col-12 col-md-3 mt-4 ">
                            <CardStatus key={index} title={element.title} counter={element.counter} icon={element.icon}></CardStatus>
                        </div>

                        );
                    })
                    }
                </div>
            </div>
        </section>
    )
}
export default Status;