import LinkButton from "../shared/LinkButton";
import styles from './UseCaseCard.module.css';

interface Props{
    infoPoints : InfoPoint[];
    heading: string;
    description: string;
    statPoints: StatsPoint[];
    textSectionOrder: number;
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
        <div className={styles.contentSection}>
            <div className={styles.infoPoint}>
                <div>
                    <img src={props.infoPoints[0].imageLink}/>
                </div>
                <p>{props.infoPoints[0].headingText}</p>
            </div>
            <div className={styles.infoPoint}>
                <div>
                    <img src={props.infoPoints[1].imageLink}/>
                </div>
                <p>{props.infoPoints[1].headingText}</p>
            </div>
            <div className={styles.infoPoint}>
                <div>
                    <img src={props.infoPoints[2].imageLink}/>
                </div>
                <p>{props.infoPoints[2].headingText}</p>
            </div>
            <div className={styles.infoPoint}>
                <div>
                    <img src={props.infoPoints[3].imageLink}/>
                </div>
                <p>{props.infoPoints[3].headingText}</p>
            </div>
        </div>
        <div className={styles.textSection}>
            <div>
                <p>{props.heading}</p>
                <p>{props.description}</p>
            </div>
            <div className={styles.statsSection}>
                <div>
                    <p>{props.statPoints[0].figure}%</p>
                    <p>{props.statPoints[0].text}</p>
                </div>
                <div>
                    <p>{props.statPoints[1].figure}%</p>
                    <p>{props.statPoints[1].text}</p>
                </div>
                <div>
                    <p>{props.statPoints[2].figure}%</p>
                    <p>{props.statPoints[2].text}</p>
                </div>
            </div>
            <div>
                <LinkButton buttonText="Learn More" link="#"/>
            </div>
        </div>
    </div>);
}

export default UseCaseCard;