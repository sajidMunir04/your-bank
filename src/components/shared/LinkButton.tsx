import { LinkButtonProps } from "./LinkButtonColored";
import styles from "./LinkButton.module.css";


function LinkButton(props : LinkButtonProps)
{
    return (<div className={styles.container}>
        <a className={styles.linkButton} href={props.link}>{props.buttonText}</a>
    </div>);
}

export default LinkButton;