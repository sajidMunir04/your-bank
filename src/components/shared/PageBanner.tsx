import styles from "./PageBanner.module.css";


interface Props{
    imageLink: string,
    infoText: string,
    headingTextWhite: string,
    headingTextColored: string,
    headingTextWhiteRemaining?: string,
    description: string
} 

function PageBanner(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.backgroundContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.bgImage} src={props.imageLink}/>
            </div>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
                {props.infoText != "" && <p className={styles.subText}>{props.infoText}</p>}
                <h1 className={styles.heading}>{props.headingTextWhite}<span className={styles.coloredText}>{props.headingTextColored}</span>{props.headingTextWhiteRemaining}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    </div>);
}

export default PageBanner;
