import BenefitsLayout from "../components/careers/BenefitsLayout";
import JobsLayout from "../components/careers/JobsLayout";
import ValuesLayout from "../components/careers/ValuesLayout";
import FAQLayout from "../components/home/FAQLayout";
import FooterTemplate from "../components/shared/FooterTemplate";
import HeaderTemplate from "../components/shared/HeaderTemplate";
import PageBanner from "../components/shared/PageBanner";
import PromotionalBanner from "../components/shared/PromotionalBanner";

function Careers(){
    return (<div>
        <HeaderTemplate/>
        <PageBanner imageLink="/images/careers/Image.png" infoText="" headingTextWhite="Welcome to " 
        headingTextColored="YourBank " headingTextWhiteRemaining="Careers!" description="Join our team and embark on a rewarding journey in the banking industry. 
        At YourBank, we are committed to fostering a culture of excellence and providing opportunities 
        for professional growth. With a focus on innovation, customer service, and integrity, 
        we strive to make a positive impact in the lives of our customers and communities. 
        Join us today and be a part of our mission to shape the future of banking."/>
        <ValuesLayout/>
        <BenefitsLayout/>
        <JobsLayout/>
        <FAQLayout/>
        <PromotionalBanner headingTextWhite='Start your career with ' 
        headingTextColored='YourBank today!' buttonText='Apply Now' description='Lorem ipsum dolor sit amet consectetur. 
        Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. 
        Nascetur viverra arcu sed amet cursus purus.'/>
        <FooterTemplate/>
    </div>);
}

export default Careers;