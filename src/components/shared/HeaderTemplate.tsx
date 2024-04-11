import React from 'react';
import LinkButton from './LinkButton';
import LinkButtonColored from './LinkButtonColored';
import styles from './HeaderTemplate.module.css';

function HeaderTemplate()
{
    return (<div className={styles.container}>
        <div>
            <img src='/Logo.png'/>
        </div>
        <nav className={styles.navBar}>
            <div>
                <a href='#'>Home</a>
            </div>
            <div>
                <a href='#'>Careers</a>
            </div>
            <div>
                <a href='#'>About</a>
            </div>
            <div>
                <a href='#'>Security</a>
            </div>
        </nav>
        <div>
            <div>
                <LinkButton buttonText='Sign Up' link='#'/>
            </div>
            <div>
                <LinkButtonColored buttonText='Login' link='#'/>
            </div>
        </div>
    </div>);
}

export default HeaderTemplate;