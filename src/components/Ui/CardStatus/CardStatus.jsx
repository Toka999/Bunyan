import  styles  from "./CardStatus.module.css";
const CardStatus =({counter, title,icon})=>{
    return(
        <div className={`${styles.CardBgColor} rounded shadow  d-flex flex-row align-items-center justify-content-around w-100`}>
            <div className={` icon w-100 d-flex align-items-center justify-content-center`}>
                {icon}
            </div>
            <div className={`${styles.info} info d-flex flex-column w-100`}>
                <span className={`${styles.counter} counter`}>{counter}</span>
                <span className={`${styles.title} title`}>{title}</span>
            </div>

        </div>
    );
}

export default CardStatus;