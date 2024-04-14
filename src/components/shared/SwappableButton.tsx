import { useState } from "react";
import styles from "./SwappableButton.module.css";


interface Props {
    leftButtonText : string,
    leftButtonLink : string,
    rightButtonText : string,
    rightButtonLink : string,
    onLeftButtonClick? : VoidFunction,
    onRightButtonClick? : VoidFunction
}

function SwappableButton(props : Props)
{
    const [leftButtonSelected,setButtonState] = useState(true);

    const handleLeftClick = () => {
        props.onLeftButtonClick;
        setButtonState(true);
    }

    const handleRightClick = () => {
        props.onRightButtonClick;
        setButtonState(false);
    }

    return (<div className={styles.container}>
            <button onClick={handleLeftClick} className={`${styles.singleButton} ${leftButtonSelected && styles.selectedButton}`} >{props.leftButtonText}</button>
            <button onClick={handleRightClick} className={`${styles.singleButton} ${!leftButtonSelected && styles.selectedButton}`}>{props.rightButtonText}</button>
    </div>);
}

export default SwappableButton;