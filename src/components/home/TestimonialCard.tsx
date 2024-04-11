interface Props{
    imageLink: string,
    testimonialText: string,
    customerName: string
}

function TestimonialCard(props : Props)
{
    return (<div>
        <div>
            <img src={props.imageLink}/>
        </div>
        <div>
            <p>{props.testimonialText}</p>
        </div>
        <div>
            <p>{props.customerName}</p>
        </div>
    </div>);
}

export default TestimonialCard;