import PressReleaseTemplate from "../components/about/PressReleaseTemplate";
import VisionTemplate from "../components/about/VisionTemplate";
import FooterTemplate from "../components/shared/FooterTemplate";
import HeaderTemplate from "../components/shared/HeaderTemplate";
import PageBanner from "../components/shared/PageBanner";



function About(){
    return (<>
    <HeaderTemplate/>
    <PageBanner imageLink="/images/about/Image(11).png" infoText="Welcome to YourBank" 
    headingTextWhite="Where Banking Meets " headingTextColored="Excellence!" description="At YourBank, we believe that banking should be more 
    than just transactions. It should be an experience that empowers individuals and businesses 
    to thrive and reach their financial goals. As a trusted financial institution, we are 
    committed to delivering exceptional banking services that go beyond expectations. 
    With a focus on innovation, personalized solutions, and unwavering integrity, 
    we strive to provide the best banking experience for our valued customers. 
    Join us on this exciting journey and discover a new level of banking excellence."/>
    <VisionTemplate/>
    <PressReleaseTemplate/>
    <FooterTemplate/>
    </>);
}

export default About;