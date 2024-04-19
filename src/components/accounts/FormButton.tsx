import styles from "./FormButton.module.css";


interface Props{
    buttonText: string;
    isGreen?: boolean
}

function FormButton(props : Props)
{
    return (<button className={`${styles.button} ${props.isGreen && styles.greenButton}`} type='submit'>{props.buttonText}</button>);
}

export default FormButton;

