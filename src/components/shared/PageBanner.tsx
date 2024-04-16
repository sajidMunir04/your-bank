interface Props{
    imageLink: string,
    infoText: string,
    headingTextWhite: string,
    headingTextColored: string,
    headingTextWhiteRemaining?: string,
    description: string
} 

function PageBanner(props : Props)
{
    return (<div>
        <div>
            <div>
                <img src={props.imageLink}/>
            </div>
        </div>
        <div>
            <div>
                {props.infoText != "" && <p>{props.infoText}</p>}
                <h1>{props.headingTextWhite}<span>{props.headingTextColored}</span>{props.headingTextWhiteRemaining}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    </div>);
}

export default PageBanner;
