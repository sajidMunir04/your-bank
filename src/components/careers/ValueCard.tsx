import styles from "./ValueCard.module.css";

interface Props {
    heading: string,
    description: string
}

function ValueCard(props : Props)
{
    return (<div className={styles.container}>
        <h3 className={styles.headingText}>{props.heading}</h3>
        <p>{props.description}</p>
    </div>);
}

export default ValueCard;