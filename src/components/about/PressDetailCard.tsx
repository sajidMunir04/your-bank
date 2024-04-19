import stlyes from "./PressDetailCard.module.css";


interface Props{
    imageLink: string,
    headingText: string,
    location: string,
    date: string
    description: string
}

function PressDetailCard(props : Props)
{
    return (<div className={stlyes.container}>
        <div className={stlyes.imageContainer}>
            <img className={stlyes.image} src={props.imageLink}/>
        </div>
        <div>
            <p className={stlyes.headingText}>{props.headingText}</p>
            <div className={stlyes.detailsContainer}>
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