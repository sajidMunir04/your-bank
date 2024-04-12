import LinkButtonColored from "../shared/LinkButtonColored";
import TransactionSection from "../shared/TransactionSection";
import styles from "./MainBanner.module.css";

function MainBanner()
{
    return (<div className={styles.container}>
        <div className={styles.section}>
            <div className={styles.infoPoint}>
                <div><img src="/Icon(10).png"/></div>
                <p className={styles.infoPointText}>No LLC Required, No Credit Check.</p>
            </div>
            <h1 className={styles.headingText}>
            Welcome to YourBank Empowering Your <span className={styles.coloredText}>Financial Journey</span>
            </h1>
            <p className={styles.text}>
            At YourBank, our mission is to provide comprehensive banking solutions that empower 
            individuals and businesses to achieve their financial goals. We are committed to delivering 
            personalized and innovative services that prioritize our customers' needs.
            </p>
            <div className={styles.buttonContainer}>
                <LinkButtonColored buttonText="Open Account" link="#"/>
            </div>          
        </div>
        <div className={styles.section}>
            <TransactionSection/>
        </div>
    </div>);
}

export default MainBanner;