import LinkButtonColored from "./LinkButtonColored";
import styles from "./PromotionalBanner.module.css";

interface Props{
    headingTextWhite: string,
    headingTextColored: string,
    description: string,
    buttonText: string
}

function PromotionalBanner(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.backgroundContainer}>
            <img src="/images/home/design.svg"/>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
                <h2 className={styles.mainText}>{props.headingTextWhite}<span className={styles.mainTextColored}>{props.headingTextColored}</span></h2>
                <p>{props.description}</p>
            </div>
            <div className={styles.butttonContainer}>
                <LinkButtonColored buttonText={props.buttonText} link="#"/>
            </div>
        </div>
    </div>);
}

export default PromotionalBanner;