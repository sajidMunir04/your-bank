import { LinkButtonProps } from "./LinkButtonColored";


function LinkButton(props : LinkButtonProps)
{
    return (<div>
        <a href={props.link}>{props.buttonText}</a>
    </div>);
}

export default LinkButton;