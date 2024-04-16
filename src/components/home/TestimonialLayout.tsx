import LayoutHeaderWithButtons from "../shared/LayoutHeaderWithButtons";
import TestimonialCard from "./TestimonialCard";
import styles from "./TestimonialLayout.module.css";

function TestimonialLayout()
{
    return (<div className={styles.container}>
        <div>
            <LayoutHeaderWithButtons headingTextWhite="Our " headingTextColored="Testimonials" description="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. 
            See why our clients trust us for a secure and prosperous financial journey" leftButtonText="For Individuals" leftButtonLink="#" rightButtonText="For Businesses" rightButtonLink="#"/>
        </div>
        <div className={styles.contentSection}>
            <div className={styles.buttonSection}>
                <div className={styles.button}>
                    <img className={styles.buttonImage} src="/images/arrows/leftArrow.svg"/>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div>
                    <TestimonialCard imageLink="/Icon(4).png" testimonialText="I recently started my own business, and YourBank 
                    has been instrumental in helping me set up my business accounts 
                    and secure the financing I needed. Their expert guidance and tailored 
                    solutions have been invaluable." customerName="John D"/>
                </div>
                <div>
                    <TestimonialCard imageLink="/Icon(4).png" testimonialText="I recently started my own business, and YourBank 
                    has been instrumental in helping me set up my business accounts 
                    and secure the financing I needed. Their expert guidance and tailored 
                    solutions have been invaluable." customerName="John D"/>
                </div>
                <div>
                    <TestimonialCard imageLink="/Icon(4).png" testimonialText="I recently started my own business, and YourBank 
                    has been instrumental in helping me set up my business accounts 
                    and secure the financing I needed. Their expert guidance and tailored 
                    solutions have been invaluable." customerName="John D"/>
                </div>
            </div>
            <div className={styles.buttonSection}>
                <div className={styles.button}>
                    <img className={styles.buttonImage} src="/images/arrows/rightArrow.svg"/>
                </div>
            </div>
        </div>
    </div>);
}

export default TestimonialLayout;