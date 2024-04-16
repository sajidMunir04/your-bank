import styles from "./FeatureDetailCard.module.css";


interface Props {
    heading: string,
    description: string
}


function FeatureDetailCard(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.subContainer}>
            <p className={styles.headingText}>{props.heading}</p>
            <div className={styles.arrowContainer}>
                <img src="/images/arrows/arrow.svg"/>
            </div>
        </div>
        <div>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default FeatureDetailCard;