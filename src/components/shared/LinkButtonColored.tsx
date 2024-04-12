import styles from "./LinkButtonColored.module.css";

export interface LinkButtonProps {
    buttonText : string,
    link: string
}

function LinkButtonColored(props : LinkButtonProps)
{
    return (<div className={styles.container}>
        <a className={styles.linkButtonColored} href={props.link}>{props.buttonText}</a>
    </div>);
}

export default LinkButtonColored;