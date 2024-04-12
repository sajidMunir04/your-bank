import stlyes from "./ProductDetailCard.module.css";

interface Props {
    imageLink: string,
    heading: string,
    description: string
}


function ProductDetailCard(props : Props)
{
    return (<div className={stlyes.container}>
        <div>
            <img src={props.imageLink}/>
        </div>
        <div>
            <p>{props.heading}</p>
        </div>
        <div>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default ProductDetailCard;