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
                    <div className={styles.contactInfoImageContainer}>
                    <img src="/Icon(5).png"/>
                    </div>
                    <p className={styles.contactInfoText}>hello@skillbirdge.com</p>
                </div>
                <div className={styles.contactInfo}>
                    <div className={styles.contactInfoImageContainer}>
                    <img src="/Icon(5).png"/>
                    </div>
                    <p className={styles.contactInfoText}>hello@skillbirdge.com</p>
                </div>
                <div className={styles.contactInfo}>
                    <div className={styles.contactInfoImageContainer}>
                    <img src="/Icon(5).png"/>
                    </div>
                    <p className={styles.contactInfoText}>hello@skillbirdge.com</p>
                </div>
            </div>
        <div className={styles.infoSection}>
                <div className={styles.socialLinksContainer}>
                    <div className={styles.socialLink}>
                        <img className={styles.socialLinkImage} src="/images/common/fb.svg"/>
                    </div>
                    <div className={styles.socialLink}>
                        <img className={styles.socialLinkImage} src="/images/common/linkedin.svg"/>
                    </div>
                    <div className={styles.socialLink}>
                        <img className={styles.socialLinkImage} src="/images/common/twitter.svg"/>
                    </div>
                </div>
                <div>
                    <p>Your Bank All Rights Reserved</p>
                </div>
                <div className={styles.externalLinkContainer}>
                    <a className={styles.externalLink} href="#">Privacy Policy</a>
                    <a className={styles.externalLink} style={{borderLeft:'2px solid #B3B3B3',paddingLeft:'2%'}} href="#">Terms of Service</a>
                </div>
        </div>
    </div>);
}

export default FooterTemplate;