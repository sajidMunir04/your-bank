
interface Props{
    imageLink: string,
    headingText: string,
    location: string,
    date: string
    description: string
}

function PressDetailCard(props : Props)
{
    return (<div>
        <div>
            <img src={props.imageLink}/>
        </div>
        <div>
            <p>{props.headingText}</p>
            <div>
                <p>Location: {props.location}</p>
                <p>Date: {props.date}</p>
            </div>
        </div>
        <div>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default PressDetailCard;