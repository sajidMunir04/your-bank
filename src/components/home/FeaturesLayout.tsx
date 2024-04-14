import { useState } from "react";
import LayoutHeader from "../shared/LayoutHeader";
import FeatureDetailCard from "./FeatureDetailCard";
import styles from "./FeaturesLayout.module.css";

function FeaturesLayout()
{
    const [buttonIndex,setButtonIndex] = useState(0);

    return (<div className={styles.container}>
        <LayoutHeader headingTextWhite="Our " headingTextColored="Features" description="Experience a host of powerful features 
        at YourBank, including seamless online banking, secure transactions, 
        and personalized financial insights, all designed to enhance your banking experience"/>
        <div className={styles.contentContainer}>
            <div className={styles.buttonSection}>
                <button className={styles.button}>Online Banking</button>
                <button className={styles.button}>Financial Tools</button>
                <button className={styles.button}>Customer Support</button>
            </div>
            <div className={styles.featureDetailSection}>
                <FeatureDetailCard heading="24/7 Account Access" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
                
                <FeatureDetailCard heading="24/7 Account Access" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
                
                <FeatureDetailCard heading="24/7 Account Access" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
                
                <FeatureDetailCard heading="24/7 Account Access" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
            </div>
        </div>
    </div>);
}

export default FeaturesLayout;