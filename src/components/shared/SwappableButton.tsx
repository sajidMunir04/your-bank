
interface Props {
    leftButtonText : string,
    leftButtonLink : string,
    rightButtonText : string,
    rightButtonLink : string
}

function SwappableButton(props : Props)
{
    return (<div>
            <a href={props.leftButtonLink}>{props.leftButtonText}</a>
            <a href={props.rightButtonLink}>{props.rightButtonText}</a>
    </div>);
}

export default SwappableButton;