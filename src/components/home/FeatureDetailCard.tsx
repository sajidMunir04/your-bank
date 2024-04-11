
interface Props {
    heading: string,
    description: string
}


function FeatureDetailCard(props : Props)
{
    return (<div>
        <div>
            <p>{props.heading}</p>
            <div>
                <img src="/Icon(3).png"/>
            </div>
        </div>
        <div>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default FeatureDetailCard;