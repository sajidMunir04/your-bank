

interface Props{
    headingTextWhite : string,
    headingTextColored : string
}

function LayoutHeading(props : Props)
{
    return (<h2>
        {props.headingTextWhite}<span>{props.headingTextColored}</span>
    </h2>);
}

export default LayoutHeading;