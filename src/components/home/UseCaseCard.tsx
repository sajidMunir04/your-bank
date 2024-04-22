import GradientIconBackground from "../shared/GradientIconBackground";
import styles from './UseCaseCard.module.css';

interface Props{
    infoPoints : InfoPoint[];
    heading: string;
    description: string;
    statPoints: StatsPoint[];
    textSectionOrder: number;
    reverseOrder: boolean,
    reverseAbstractImage?: boolean
}

export type InfoPoint = {
    imageLink: string;
    headingText: string
}


export type StatsPoint = {
    figure: number;
    text: string
}
function UseCaseCard(props : Props)
{
    return (<div className={styles.container}>
        {!props.reverseAbstractImage && <div className={styles.abstractImageContainer}>
            <img src="/images/home/design.svg"/>
        </div>}
        {props.reverseAbstractImage && <div className={styles.abstractImageContainer} style={{ right:'8.4%',rotate:'90deg'}}>
            <img src="/images/home/design.svg"/>
        </div>}
        <div className={`${styles.contentSection} ${props.reverseOrder && styles.lastOrder}`}>
            {props.infoPoints.map((point) => (
                <div className={styles.infoPoint}>
                <div>
                    <GradientIconBackground imageLink={point.imageLink}/>
                </div>
                <p>{point.headingText}</p>
                </div>
            ))}
        </div>
        <div className={`${styles.textSection} ${props.reverseOrder && styles.firstOrder}`}>
            <div>
                <p className={styles.headingText}>{props.heading}</p>
                <p className={styles.descriptionText}>{props.description}</p>
            </div>
            <div className={styles.statsSection}>
                {props.statPoints.map((point) => (<div className={styles.statPoint}>
                    <p className={styles.figuresText}>{point.figure}%</p>
                    <p className={styles.figureInfoText}>{point.text}</p>
                </div>))}
            </div>
            <div className={styles.buttonContainer}>
                <a className={styles.linkButton} href="#">Learn More</a>
            </div>
        </div>
    </div>);
}

export default UseCaseCard;