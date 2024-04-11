import LayoutHeaderWithButtons from "../shared/LayoutHeaderWithButtons";
import TestimonialCard from "./TestimonialCard";

function TestimonialLayout()
{
    return (<div>
        <div>
            <LayoutHeaderWithButtons headingTextWhite="Our " headingTextColored="Testimonials" description="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. 
            See why our clients trust us for a secure and prosperous financial journey" leftButtonText="For Individuals" leftButtonLink="#" rightButtonText="For Businesses" rightButtonLink="#"/>
        </div>
        <div>
            <div>
                <TestimonialCard imageLink="/Icon(4).png" testimonialText="I recently started my own business, and YourBank 
                has been instrumental in helping me set up my business accounts 
                and secure the financing I needed. Their expert guidance and tailored 
                solutions have been invaluable." customerName="John D"/>
            </div>
            <div>
                <TestimonialCard imageLink="/Icon(4).png" testimonialText="I recently started my own business, and YourBank 
                has been instrumental in helping me set up my business accounts 
                and secure the financing I needed. Their expert guidance and tailored 
                solutions have been invaluable." customerName="John D"/>
            </div>
            <div>
                <TestimonialCard imageLink="/Icon(4).png" testimonialText="I recently started my own business, and YourBank 
                has been instrumental in helping me set up my business accounts 
                and secure the financing I needed. Their expert guidance and tailored 
                solutions have been invaluable." customerName="John D"/>
            </div>
        </div>
    </div>);
}

export default TestimonialLayout;