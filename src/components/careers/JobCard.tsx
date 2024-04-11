import LinkButtonColored from "../shared/LinkButtonColored";

interface Props{
    jobHeading: string,
    location: string,
    department: string,
    jobDescription: string,
    requirements: string[]
}

function JobCard(props : Props)
{
    return (<div>
        <p>{props.jobHeading}</p>
        <div>
            <p>Location: {props.location}</p>
            <p>Department: {props.department}</p>
        </div> 
        <p>About this job</p>
        <p>{props.jobDescription}</p>
        <p>Requirements & Qualifications</p>
        <ul>
            {props.requirements.map((jobreq) => <li>
                <div>
                    <div>
                        <img src="/Icon(7).png"/>
                    </div>
                    <p>
                        {jobreq}
                    </p>
                </div>
            </li>)}
        </ul>
        <div>
            <LinkButtonColored buttonText="Apply Now" link="#"/>
        </div>
    </div>);
}

export default JobCard;