import React from 'react';
import LinkButton from './LinkButton';
import LinkButtonColored from './LinkButtonColored';
import styles from './HeaderTemplate.module.css';

function HeaderTemplate()
{
    return (<div className={styles.container}>
        <div className={styles.logoContainer}>
            <img className={styles.logoImage} src='/Logo.png'/>
        </div>
        <nav className={styles.navBar}>
            <div>
                <a className={styles.navLinkText} href='/'>Home</a>
            </div>
            <div>
                <a className={styles.navLinkText} href='/careers'>Careers</a>
            </div>
            <div>
                <a className={styles.navLinkText} href='/about'>About</a>
            </div>
            <div>
                <a className={styles.navLinkText} href='/security'>Security</a>
            </div>
        </nav>
        <div className={styles.accountButtons}>
            <div className={styles.accountButton}>
                <LinkButton buttonText='Sign Up' link='/signup'/>
            </div>
            <div className={styles.accountButton}>
                <LinkButtonColored buttonText='Login' link='/login'/>
            </div>
        </div>
    </div>);
}

export default HeaderTemplate;