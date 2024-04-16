import styles from "./ValueCard.module.css";

interface Props {
    heading: string,
    description: string
}

function ValueCard(props : Props)
{
    return (<div className={styles.container}>
        <p>{props.heading}</p>
        <p>{props.description}</p>
    </div>);
}

export default ValueCard;