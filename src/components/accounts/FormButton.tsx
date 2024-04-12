
interface Props{
    buttonText: string;

}

function FormButton(props : Props)
{
    return (<button type='submit'>{props.buttonText}</button>);
}

export default FormButton;

