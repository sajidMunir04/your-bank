

export interface LinkButtonProps {
    buttonText : string,
    link: string
}

function LinkButtonColored(props : LinkButtonProps)
{
    return (<div>
        <a href={props.link}>{props.buttonText}</a>
    </div>);
}

export default LinkButtonColored;