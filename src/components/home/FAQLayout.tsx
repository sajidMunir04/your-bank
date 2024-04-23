import LayoutDescription from "../shared/LayoutDescription";
import FAQElement from "./FAQElement";
import styles from "./FAQLayout.module.css";
import headingStyles from "../shared/LayoutHeading.module.css";
import { useState } from "react";

function FAQLayout()
{
    const [contentHidden,setHiddenState] = useState(true);

    const handleLoadButtonClick = () => {
        if (contentHidden){
            
        }
        else{

        }
        setHiddenState(!contentHidden);
    }

    return (<div className={styles.container}>
        <div className={styles.header}>
            <h2 className={headingStyles.headingText}>
                <span className={headingStyles.coloredText}>Frequently </span>Asked Questions</h2>
            <LayoutDescription text="Still you have any questions? Contact our Team via support@yourbank.com"/>
        </div>
        <div className={styles.contentContainer}>
            <FAQElement question="How do I open an account with YourBank?" answer="Opening an account with YourBank is easy. 
            Simply visit our website and click on the Open an Account button. Follow the prompts, 
            provide the required information, and complete the application process. If you have any 
            questions or need assistance, our customer support team is available to help."/>
                        <FAQElement question="How do I open an account with YourBank?" answer="Opening an account with YourBank is easy. 
            Simply visit our website and click on the Open an Account button. Follow the prompts, 
            provide the required information, and complete the application process. If you have any 
            questions or need assistance, our customer support team is available to help."/>
                        <FAQElement question="How do I open an account with YourBank?" answer="Opening an account with YourBank is easy. 
            Simply visit our website and click on the Open an Account button. Follow the prompts, 
            provide the required information, and complete the application process. If you have any 
            questions or need assistance, our customer support team is available to help."/>
                        <FAQElement question="How do I open an account with YourBank?" answer="Opening an account with YourBank is easy. 
            Simply visit our website and click on the Open an Account button. Follow the prompts, 
            provide the required information, and complete the application process. If you have any 
            questions or need assistance, our customer support team is available to help."/>
            {contentHidden == false && (<>
                <FAQElement question="How do I open an account with YourBank?" answer="Opening an account with YourBank is easy. 
                Simply visit our website and click on the Open an Account button. Follow the prompts, 
                provide the required information, and complete the application process. If you have any 
                questions or need assistance, our customer support team is available to help."/>
                                        <FAQElement question="How do I open an account with YourBank?" answer="Opening an account with YourBank is easy. 
                Simply visit our website and click on the Open an Account button. Follow the prompts, 
                provide the required information, and complete the application process. If you have any 
                questions or need assistance, our customer support team is available to help."/>
                                        <FAQElement question="How do I open an account with YourBank?" answer="Opening an account with YourBank is easy. 
                Simply visit our website and click on the Open an Account button. Follow the prompts, 
                provide the required information, and complete the application process. If you have any 
                questions or need assistance, our customer support team is available to help."/>
                                        <FAQElement question="How do I open an account with YourBank?" answer="Opening an account with YourBank is easy. 
                Simply visit our website and click on the Open an Account button. Follow the prompts, 
                provide the required information, and complete the application process. If you have any 
                questions or need assistance, our customer support team is available to help."/>
            </>)}
        </div>
        <div className={styles.buttonContainer}>
            <div>
                <button className={styles.button} onClick={handleLoadButtonClick} type='button'>{contentHidden ? 'Load All FAQ\'s' : 'Show Less'}</button>
            </div>
        </div>
    </div>);
}

export default FAQLayout;