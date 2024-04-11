

interface Props {
    heading: string,
    description: string
}

function ValueCard(props : Props)
{
    return (<div>
        <p>{props.heading}</p>
        <p>{props.description}</p>
    </div>);
}

export default ValueCard;