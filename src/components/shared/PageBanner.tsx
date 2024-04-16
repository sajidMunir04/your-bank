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
                {props.infoText != "" && <p>{props.infoText}</p>}
                <h1>{props.headingTextWhite}<span>{props.headingTextColored}</span>{props.headingTextWhiteRemaining}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    </div>);
}

export default PageBanner;
