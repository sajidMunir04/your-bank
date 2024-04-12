import LayoutHeader from "../shared/LayoutHeader";
import FAQElement from "./FAQElement";
import styles from "./FAQLayout.module.css";

function FAQLayout()
{
    return (<div className={styles.container}>
        <div>
            <LayoutHeader headingTextColored="Frequently" headingTextWhite="Asked Questions" description="Still you have any questions? 
            Contact our Team via support@yourbank.com"/>
        </div>
        <div>
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
        </div>
    </div>);
}

export default FAQLayout;