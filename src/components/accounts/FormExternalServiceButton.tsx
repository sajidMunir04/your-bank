import GradientIconBackground from "../shared/GradientIconBackground";


interface Props{
    imageLink: string
}

function FormExternalServiceButton(props : Props)
{
    return (<GradientIconBackground imageLink={props.imageLink}/>);
}

export default FormExternalServiceButton;