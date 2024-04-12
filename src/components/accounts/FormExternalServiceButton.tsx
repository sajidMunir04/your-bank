

interface Props{
    imageLink: string
}

function FormExternalServiceButton(props : Props)
{
    return (<div><a href='#'><img src={props.imageLink}/></a></div>);
}

export default FormExternalServiceButton;