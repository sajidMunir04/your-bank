import styles from "./FormInput.module.css";

interface Props{
    inputType: string,
    placeholder: string
}


function FormInput(props : Props)
{
    return (<input className={styles.input} type={props.inputType} placeholder={props.placeholder}/>);
}

export default FormInput;