interface Props{
    inputType: string,
    placeholder: string
}


function FormInput(props : Props)
{
    return (<input type={props.inputType} placeholder={props.placeholder}/>);
}

export default FormInput;