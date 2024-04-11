import LayoutDescription from "./LayoutDescription";
import LayoutHeading from "./LayoutHeading";
import SwappableButton from "./SwappableButton";


interface Props{
    headingTextWhite : string,
    headingTextColored : string,
    description: string,
    leftButtonText : string,
    leftButtonLink : string,
    rightButtonText : string,
    rightButtonLink : string
}

function LayoutHeaderWithButtons(props : Props)
{
    return (<div>
        <div>
            <LayoutHeading headingTextWhite={props.headingTextWhite} headingTextColored={props.headingTextColored}/>
        </div>
        <div>
            <LayoutDescription text={props.description}/>
            <SwappableButton leftButtonText={props.leftButtonText} leftButtonLink={props.leftButtonLink}
            rightButtonText={props.rightButtonText} rightButtonLink={props.rightButtonLink}/>
        </div>
    </div>);
}

export default LayoutHeaderWithButtons;