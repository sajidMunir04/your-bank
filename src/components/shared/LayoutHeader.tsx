import LayoutDescription from "./LayoutDescription";
import LayoutHeading from "./LayoutHeading";

interface Props{
    headingTextWhite : string,
    headingTextColored : string,
    description: string
}

function LayoutHeader(props : Props)
{
    return (<div>
        <LayoutHeading headingTextWhite={props.headingTextWhite} 
        headingTextColored={props.headingTextColored}/>
        <LayoutDescription text={props.description}/>
    </div>);
}

export default LayoutHeader;