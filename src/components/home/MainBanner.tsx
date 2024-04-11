import LinkButtonColored from "../shared/LinkButtonColored";
import TransactionSection from "../shared/TransactionSection";


function MainBanner()
{
    return (<div>
        <div>
            <div>
                <p>No LLC Required, No Credit Check.</p>
            </div>
            <h1>
            Welcome to YourBank Empowering Your <span>Financial Journey</span>
            </h1>
            <p>
            At YourBank, our mission is to provide comprehensive banking solutions that empower 
            individuals and businesses to achieve their financial goals. We are committed to delivering 
            personalized and innovative services that prioritize our customers' needs.
            </p>
            <div>
                <LinkButtonColored buttonText="Open Account" link="#"/>
            </div>          
        </div>
        <div>
            <TransactionSection/>
        </div>
    </div>);
}

export default MainBanner;