import LinkButtonColored from "../shared/LinkButtonColored";
import styles from "./JobCard.module.css";

interface Props{
    jobHeading: string,
    location: string,
    department: string,
    jobDescription: string,
    requirements: string[]
}

function JobCard(props : Props)
{
    return (<div className={styles.container}>
        <p className={styles.mainHeading}>{props.jobHeading}</p>
        <div>
            <p>Location: {props.location}</p>
            <p>Department: {props.department}</p>
        </div> 
        <p className={styles.subHeading}>About this job</p>
        <p>{props.jobDescription}</p>
        <p className={styles.subHeading}>Requirements & Qualifications</p>
        <ul className={styles.list}>
            {props.requirements.map((jobreq) => <li className={styles.listItem}>
                <div className={styles.listItemsContainer}>
                    <div>
                        <img src="/Icon(7).png"/>
                    </div>
                    <p className={styles.descriptionText}>
                        {jobreq}
                    </p>
                </div>
            </li>)}
        </ul>
        <div>
            <div className={styles.linkButtonContainer}>
                <LinkButtonColored buttonText="Apply Now" link="#"/>
            </div>
        </div>
    </div>);
}

export default JobCard;