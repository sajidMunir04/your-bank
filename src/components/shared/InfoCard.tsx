import GradientIconBackground from "./GradientIconBackground";
import styles from "./InfoCard.module.css";

interface Props{
    imageLink: string,
    heading: string,
    description: string
}

function InfoCard(props : Props)
{
    return (<div className={styles.container}>
            <div className={styles.headSection}>
            <GradientIconBackground imageLink={props.imageLink}/>
            <p>
                {props.heading}
            </p>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
    </div>);
}

export default InfoCard;