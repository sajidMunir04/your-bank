import LayoutHeader from "../shared/LayoutHeader";
import UseCaseCard, { InfoPoint, StatsPoint } from "./UseCaseCard";
import styles from "./UseCasesLayout.module.css";

function UseCasesLayout()
{
    const infoPointOne : InfoPoint = {imageLink: '/Icon(11).png', headingText: 'Managing Personal Finances'};
    const infoPointTwo : InfoPoint = {imageLink: '/Icon(11).png', headingText: 'Managing Personal Finances'};
    const infoPointThree : InfoPoint = {imageLink: '/Icon(11).png', headingText: 'Managing Personal Finances'};
    const infoPointFour : InfoPoint = {imageLink: '/Icon(11).png', headingText: 'Managing Personal Finances'};

    const statPointOne : StatsPoint = {figure: 78, text: 'Secure Retirement Planning'};
    return (<div className={styles.container}>
        <div>
        <LayoutHeader headingTextWhite="" headingTextColored="Use Cases" description="At YourBank, 
        we cater to the diverse needs of individuals and businesses alike, offering 
        a wide range of financial solutions"/>
        </div>
        <div className={styles.contentContainer}>
            <UseCaseCard heading="For Individuals" description="For individuals, our mortgage services pave the way to homeownership, 
            and our flexible personal loans provide vital support during various life milestones. 
            We also prioritize retirement planning, ensuring a financially secure future for our customers" textSectionOrder={2} 
            infoPoints={[infoPointOne,infoPointTwo,infoPointThree,infoPointFour]} statPoints={[statPointOne,statPointOne,statPointOne]} reverseOrder={false}/>
            <UseCaseCard heading="For Individuals" description="For individuals, our mortgage services pave the way to homeownership, 
            and our flexible personal loans provide vital support during various life milestones. 
            We also prioritize retirement planning, ensuring a financially secure future for our customers" textSectionOrder={2} 
            infoPoints={[infoPointOne,infoPointTwo,infoPointThree,infoPointFour]} statPoints={[statPointOne,statPointOne,statPointOne]} reverseOrder={true}/>
        </div>
    </div>);
}

export default UseCasesLayout;