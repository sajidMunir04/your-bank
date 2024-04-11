import LinkButtonColored from "./LinkButtonColored";

interface Props{
    headingTextWhite: string,
    headingTextColored: string,
    description: string,
    buttonText: string
}

function PromotionalBanner(props : Props)
{
    return (<div>
        <div>

        </div>
        <div>
            <div>
                <h2>{props.headingTextWhite}<span>{props.headingTextColored}</span></h2>
                <p>{props.description}</p>
            </div>
            <div>
                <LinkButtonColored buttonText={props.buttonText} link="#"/>
            </div>
        </div>
    </div>);
}

export default PromotionalBanner;