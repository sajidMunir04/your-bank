import styles from './LayoutHeading.module.css';

interface Props{
    headingTextWhite : string,
    headingTextColored : string
}

function LayoutHeading(props : Props)
{
    return (<h2 className={styles.headingText}>
        {props.headingTextWhite}<span className={styles.coloredText}>{props.headingTextColored}</span>
    </h2>);
}

export default LayoutHeading;