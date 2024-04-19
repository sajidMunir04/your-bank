import styles from "./FormHeader.module.css";


interface Props {
    heading: string,
    description: string
}

function FormHeader(props : Props)
{
    return (<div className={styles.container}>
        <h2 className={styles.heading}>{props.heading}</h2>
        <p className={styles.descriptionText}>{props.description}</p>
    </div>)
}

export default FormHeader;