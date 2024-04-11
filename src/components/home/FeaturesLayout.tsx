import LayoutHeader from "../shared/LayoutHeader";
import FeatureDetailCard from "./FeatureDetailCard";


function FeaturesLayout()
{
    return (<div>
        <LayoutHeader headingTextWhite="Our " headingTextColored="Features" description="Experience a host of powerful features 
        at YourBank, including seamless online banking, secure transactions, 
        and personalized financial insights, all designed to enhance your banking experience"/>
        <div>
            <div>
                <a href="#">Online Banking</a>
                <a href="#">Financial Tools</a>
                <a href="#">Customer Support</a>
            </div>
            <div>
                <FeatureDetailCard heading="24/7 Account Access" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
                
                <FeatureDetailCard heading="24/7 Account Access" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
                
                <FeatureDetailCard heading="24/7 Account Access" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
                
                <FeatureDetailCard heading="24/7 Account Access" description="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online 
                banking platform. Check balances, transfer funds, and pay bills with ease."/>
            </div>
        </div>
    </div>);
}

export default FeaturesLayout;