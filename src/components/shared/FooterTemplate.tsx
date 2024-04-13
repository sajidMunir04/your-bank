import styles from "./FooterTemplate.module.css";

function FooterTemplate()
{
    return (<div className={styles.container}>
        <div className={styles.mainInfoSection}>
            <div className={styles.logoContainer}>
                <img src="/Logo.svg"/>
            </div>
            <div className={styles.navContainer}>
                <div>
                    <a className={styles.navlink} href="#">Home</a>
                </div>
                <div>
                    <a className={styles.navlink} href="#">Careers</a>
                </div>
                <div>
                    <a className={styles.navlink} href="#">About</a>
                </div>
                <div>
                    <a className={styles.navlink} href="#">Security</a>
                </div>
            </div>
        </div>
        <div className={styles.contactInfoContainer}>
                <div className={styles.contactInfo}>
                    <div>
                    <img src="/Icon(5).png"/>
                    </div>
                    <p>hello@skillbirdge.com</p>
                </div>
                <div className={styles.contactInfo}>
                    <div>
                    <img src="/Icon(5).png"/>
                    </div>
                    <p>hello@skillbirdge.com</p>
                </div>
                <div className={styles.contactInfo}>
                    <div>
                    <img src="/Icon(5).png"/>
                    </div>
                    <p>hello@skillbirdge.com</p>
                </div>
            </div>
        <div className={styles.infoSection}>
                <div>
                    <a href="#"><img src="/Button.png"/></a>
                    <a href="#"><img src="/Button.png"/></a>
                    <a href="#"><img src="/Button.png"/></a>
                </div>
                <div>
                    <p>Your Bank All Rights Reserved</p>
                </div>
                <div>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
        </div>
    </div>);
}

export default FooterTemplate;