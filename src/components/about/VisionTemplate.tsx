import LayoutHeader from "../shared/LayoutHeader";
import styles from "./VisionTemplate.module.css";


function VisionTemplate()
{
    return (<div className={styles.container}>
        <div>
            <LayoutHeader headingTextWhite="" headingTextColored="Mission & Vision" description="We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development"/>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src="/Image(2).png"/>
                </div>
                <div className={styles.textContainer} style={{borderLeftWidth: '2px',
                    borderLeftStyle: "solid",
                    borderLeftColor: 'var(--green-60)',
                    paddingLeft: '2%'
                }}>
                    <h3>Mission</h3>
                    <p>At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated 
                        to delivering innovative banking solutions that cater to their unique needs. Through personalized 
                        services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate 
                        their financial journey and realize their dreams.</p>
                </div>
            </div>
            <div  className={styles.content}>
                <div className={styles.textContainer} style={{borderRightWidth: '2px',
                    borderRightStyle: "solid",
                    borderRightColor: 'var(--green-60)',
                    paddingRight: '2%'
                }}>
                    <h3>Mission</h3>
                    <p>At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated 
                        to delivering innovative banking solutions that cater to their unique needs. Through personalized 
                        services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate 
                        their financial journey and realize their dreams.</p>
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src="/Image(2).png"/>
                </div>
            </div>
        </div>
    </div>);
}

export default VisionTemplate;