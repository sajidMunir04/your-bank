import LayoutHeader from "../shared/LayoutHeader";
import PressDetailCard from "./PressDetailCard";


function PressReleaseTemplate()
{
    return (<div>
        <div>
            <LayoutHeader headingTextColored="Press Releases" headingTextWhite="" description="Stay updated with the latest happenings and 
            exciting developments at YourBank through our press releases."/>
        </div>
        <div>
            <PressDetailCard imageLink="/Image(8).png" 
            headingText="YourBank Launches New Rewards Program to Enhance Customer 
            Loyalty and Satisfaction" location="India" date="06/11/2014" description="YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers."/>
            <PressDetailCard imageLink="/Image(8).png" 
            headingText="YourBank Launches New Rewards Program to Enhance Customer 
            Loyalty and Satisfaction" location="India" date="06/11/2014" description="YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers."/>
            <PressDetailCard imageLink="/Image(8).png" 
            headingText="YourBank Launches New Rewards Program to Enhance Customer 
            Loyalty and Satisfaction" location="India" date="06/11/2014" description="YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers."/>
            <PressDetailCard imageLink="/Image(8).png" 
            headingText="YourBank Launches New Rewards Program to Enhance Customer 
            Loyalty and Satisfaction" location="India" date="06/11/2014" description="YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers."/>
            
        </div>
    </div>);
}

export default PressReleaseTemplate;