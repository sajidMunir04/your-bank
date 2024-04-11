import LayoutHeader from "../shared/LayoutHeader";
import ValueCard from "./ValueCard";

function ValuesLayout()
{
    return (<div>
        <div>
            <LayoutHeader headingTextWhite="Our " headingTextColored="Values" description="At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our 
            culture and shape the way we work together to achieve our goals."/>
        </div>
        <div>
            <ValueCard heading="Integrity" description="We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and 
            stakeholders, even when faced with difficult choices."/>
            
            <ValueCard heading="Integrity" description="We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and 
            stakeholders, even when faced with difficult choices."/>
            
            <ValueCard heading="Integrity" description="We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and 
            stakeholders, even when faced with difficult choices."/>
            
            <ValueCard heading="Integrity" description="We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and 
            stakeholders, even when faced with difficult choices."/>
        </div>
    </div>);
}

export default ValuesLayout;