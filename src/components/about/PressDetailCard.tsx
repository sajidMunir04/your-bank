import styles from "./PressDetailCard.module.css";


interface Props{
    imageLink: string,
    headingText: string,
    location: string,
    date: string
    description: string
}

function PressDetailCard(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.imageContainer}>
            <img className={styles.image} src={props.imageLink}/>
        </div>
        <div className={styles.textContainer}>
            <p className={styles.headingText}>{props.headingText}</p>
            <div className={styles.detailsContainer}>
                <p className={styles.detailText}>Location: {props.location}</p>
                <p className={styles.detailText}>Date: {props.date}</p>
            </div>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default PressDetailCard;