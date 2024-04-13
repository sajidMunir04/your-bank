import styles from "./SwappableButton.module.css";


interface Props {
    leftButtonText : string,
    leftButtonLink : string,
    rightButtonText : string,
    rightButtonLink : string
}

function SwappableButton(props : Props)
{
    return (<div className={styles.container}>
            <a className={styles.singleButton} href={props.leftButtonLink}>{props.leftButtonText}</a>
            <a className={styles.singleButton} href={props.rightButtonLink}>{props.rightButtonText}</a>
    </div>);
}

export default SwappableButton;