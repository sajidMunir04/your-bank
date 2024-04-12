import LayoutDescription from "./LayoutDescription";
import LayoutHeading from "./LayoutHeading";
import styles from "./LayoutHeader.module.css";

interface Props{
    headingTextWhite : string,
    headingTextColored : string,
    description: string
}

function LayoutHeader(props : Props)
{
    return (<div className={styles.container}>
        <LayoutHeading headingTextWhite={props.headingTextWhite} 
        headingTextColored={props.headingTextColored}/>
        <LayoutDescription text={props.description}/>
    </div>);
}

export default LayoutHeader;