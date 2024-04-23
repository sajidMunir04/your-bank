import React, { useState } from 'react';
import LinkButton from './LinkButton';
import LinkButtonColored from './LinkButtonColored';
import styles from './HeaderTemplate.module.css';

function HeaderTemplate()
{
    const [isMenuOpen,setMenuState] = useState(false);

    const menuButtonClickHandler = () => {
        setMenuState(!isMenuOpen);
    }

    return (<div className={`${styles.container} ${isMenuOpen && styles.excessMarginContainer}`}>
        <div className={styles.logoContainer}>
            <img className={styles.logoImage} src='/Logo.png'/>
        </div>
        <nav className={`${styles.navBar} ${isMenuOpen && styles.showNavBar}`}>
            <div className={styles.navLinkContainer}>
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
            </div>
            <div className={styles.accountButtons}>
                <div className={styles.accountButton}>
                    <LinkButton buttonText='Sign Up' link='/signup'/>
                </div>
                <div className={styles.accountButton}>
                    <LinkButtonColored buttonText='Login' link='/login'/>
                </div>
            </div>
        </nav>
        <div className={styles.menuButton} onClick={menuButtonClickHandler}>
            <img className={styles.menuButtonImage} src='/images/common/menu.svg'/>
        </div>
    </div>);
}

export default HeaderTemplate;