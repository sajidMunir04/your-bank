import InfoCard from "../shared/InfoCard";
import LayoutHeader from "../shared/LayoutHeader";
import styles from "./HowWeProtectTemplate.module.css";


function HowWeProtectTemplate()
{
    return (<div className={styles.container}>
        <div>
            <LayoutHeader headingTextWhite="How We " headingTextColored="Protect You" description="At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection 
            measures ensure your assets and transactions are safeguarded at all times"/>
        </div>
        <div className={styles.contentContainer}>
            <InfoCard imageLink="/Icon(8).png" heading="Secure Online Banking Platform" description="Our online banking platform is built 
            with multiple layers of security to safeguard your information. We utilize industry-standard
             encryption protocols to ensure that your data remains 
             confidential and protected during transmission."/>
             
            <InfoCard imageLink="/Icon(8).png" heading="Secure Online Banking Platform" description="Our online banking platform is built 
            with multiple layers of security to safeguard your information. We utilize industry-standard
             encryption protocols to ensure that your data remains 
             confidential and protected during transmission."/>
             
            <InfoCard imageLink="/Icon(8).png" heading="Secure Online Banking Platform" description="Our online banking platform is built 
            with multiple layers of security to safeguard your information. We utilize industry-standard
             encryption protocols to ensure that your data remains 
             confidential and protected during transmission."/>
             
            <InfoCard imageLink="/Icon(8).png" heading="Secure Online Banking Platform" description="Our online banking platform is built 
            with multiple layers of security to safeguard your information. We utilize industry-standard
             encryption protocols to ensure that your data remains 
             confidential and protected during transmission."/> 
        </div>
    </div>);
}

export default HowWeProtectTemplate;