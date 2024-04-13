import styles from "./LayoutDescription.module.css";


interface Props{
    text: string
}


function LayoutDescription(props : Props){
    return (<p className={styles.text}>
        {props.text}
    </p>);
    
}

export default LayoutDescription;