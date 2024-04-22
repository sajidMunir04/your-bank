import LayoutDescription from "./LayoutDescription";
import LayoutHeading from "./LayoutHeading";
import SwappableButton from "./SwappableButton";
import styles from './LayoutHeaderWithButtons.module.css';

interface Props{
    headingTextWhite : string,
    headingTextColored : string,
    description: string,
    leftButtonText : string,
    rightButtonText : string,
    leftButtonEvent: () => void,
    rightButtonEvent: () => void
}

function LayoutHeaderWithButtons(props : Props)
{
    return (<div className={styles.container}>
        <div>
            <LayoutHeading headingTextWhite={props.headingTextWhite} headingTextColored={props.headingTextColored}/>
        </div>
        <div className={styles.subContainer}>
            <div className={styles.descriptionSection}>
                <LayoutDescription text={props.description}/>
            </div>
            <div className={styles.buttonsSection}>
                <SwappableButton leftButtonText={props.leftButtonText} onLeftButtonClick={props.leftButtonEvent}
                rightButtonText={props.rightButtonText} onRightButtonClick={props.rightButtonEvent}/>
            </div>
        </div>
    </div>);
}

export default LayoutHeaderWithButtons;