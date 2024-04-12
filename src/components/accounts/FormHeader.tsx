
interface Props {
    heading: string,
    description: string
}

function FormHeader(props : Props)
{
    return (<div>
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
    </div>)
}

export default FormHeader;