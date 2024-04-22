import styles from "./TestimonialCard.module.css";


interface Props{
    imageLink: string,
    testimonialText: string,
    customerName: string
}

function TestimonialCard(props : Props)
{
    return (<div className={styles.container}>
        <div>
            <img src={props.imageLink}/>
        </div>
        <div>
            <p>{props.testimonialText}</p>
        </div>
        <div>
            <p>{props.customerName}</p>
        </div>
    </div>);
}

export default TestimonialCard;