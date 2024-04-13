import GradientIconBackground from "../shared/GradientIconBackground";
import styles from "./ProductDetailCard.module.css";

interface Props {
    imageLink: string,
    heading: string,
    description: string
}


function ProductDetailCard(props : Props)
{
    return (<div className={styles.container}>
        <div>
            <GradientIconBackground imageLink={props.imageLink}/>
        </div>
        <div>
            <p className={styles.headingText}>{props.heading}</p>
        </div>
        <div>
            <p className={styles.descriptionText}>{props.description}</p>
        </div>
    </div>);
}

export default ProductDetailCard;