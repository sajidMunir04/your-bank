import LayoutHeader from "../shared/LayoutHeader";
import JobCard from "./JobCard";


function JobsLayout()
{
    return (<div>
        <div>
            <LayoutHeader headingTextWhite="" headingTextColored="Job Openings" description="Explore exciting job openings at YourBank, where we value talent, 
            innovation, and a passion for customer service. Join our team and be part of shaping a brighter 
            future in the banking industry"/>
        </div>
        <div>
            <JobCard jobHeading="Relationship Manager" location="India" department="Retail Banking"
            jobDescription="As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a 
            passion for delivering exceptional customer service." requirements={['Bachelor\'s degree in Business, Finance, or a related field',
                'Minimum of 3 years of experience in sales or relationship management in the banking industry',
                'Proven track record of meeting and exceeding sales targets',
                'Excellent interpersonal and negotiation skills',
                'Strong knowledge of banking products and services']}/>
                  <JobCard jobHeading="Relationship Manager" location="India" department="Retail Banking"
            jobDescription="As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a 
            passion for delivering exceptional customer service." requirements={['Bachelor\'s degree in Business, Finance, or a related field',
                'Minimum of 3 years of experience in sales or relationship management in the banking industry',
                'Proven track record of meeting and exceeding sales targets',
                'Excellent interpersonal and negotiation skills',
                'Strong knowledge of banking products and services']}/>
                  <JobCard jobHeading="Relationship Manager" location="India" department="Retail Banking"
            jobDescription="As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a 
            passion for delivering exceptional customer service." requirements={['Bachelor\'s degree in Business, Finance, or a related field',
                'Minimum of 3 years of experience in sales or relationship management in the banking industry',
                'Proven track record of meeting and exceeding sales targets',
                'Excellent interpersonal and negotiation skills',
                'Strong knowledge of banking products and services']}/>
        </div>
    </div>);
}

export default JobsLayout;