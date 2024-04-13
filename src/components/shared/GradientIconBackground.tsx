import styles from "./GradientIconBackground.module.css";

interface Props{
    imageLink: string
}

function GradientIconBackground(props : Props)
{
    return (<div className={styles.container}>
            <div className={styles.subContainer}>
                <img src={props.imageLink}/>    
            </div>
            </div>);
}

export default GradientIconBackground;