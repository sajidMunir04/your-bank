import { useState } from "react";
import LayoutHeader from "../shared/LayoutHeader";
import FeatureDetailCard from "./FeatureDetailCard";
import styles from "./FeaturesLayout.module.css";

function FeaturesLayout()
{
    const [section,setSection] = useState('banking');

    return (<div className={styles.container}>
        <LayoutHeader headingTextWhite="Our " headingTextColored="Features" description="Experience a host of powerful features 
        at YourBank, including seamless online banking, secure transactions, 
        and personalized financial insights, all designed to enhance your banking experience"/>
        <div className={styles.contentContainer}>
            <div className={styles.buttonSection}>
                <button onClick={() => setSection('banking')} className={`${styles.button} ${section == 'banking' && styles.selectedButton}`}>
                    Online Banking</button>
                <button onClick={() => setSection('tools')}  className={`${styles.button} ${section == 'tools' && styles.selectedButton}`}>Financial Tools</button>
                <button onClick={() => setSection('support')}  className={`${styles.button} ${section == 'support' && styles.selectedButton}`}>Customer Support</button>
            </div>
            { section == 'banking' &&
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
            }
                        { section == 'tools' &&
            <div className={styles.featureDetailSection}>
                <FeatureDetailCard heading="Stock Tool 1" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
                
                <FeatureDetailCard heading="Stock Tool 2" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
                
                <FeatureDetailCard heading="Stock Tool 3" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
                
                <FeatureDetailCard heading="Stock Tool 4" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
            </div>
            }
                        { section == 'support' &&
            <div className={styles.featureDetailSection}>
                <FeatureDetailCard heading="Helpline 1" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
                
                <FeatureDetailCard heading="Helpline 2" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
                
                <FeatureDetailCard heading="Helpline 3" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
                
                <FeatureDetailCard heading="Helpline 4" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
            </div>
            }
        </div>
    </div>);
}

export default FeaturesLayout;