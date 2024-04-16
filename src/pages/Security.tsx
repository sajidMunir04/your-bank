import FAQLayout from "../components/home/FAQLayout";
import HowWeProtectTemplate from "../components/security/HowWeProtectTemplate";
import FooterTemplate from "../components/shared/FooterTemplate";
import HeaderTemplate from "../components/shared/HeaderTemplate";
import PageBanner from "../components/shared/PageBanner";


function Security()
{
    return (<>
    <HeaderTemplate/>
    <PageBanner imageLink="/images/security/Image(12).png" infoText="" headingTextWhite="Your Security is Our " 
    headingTextColored="Top Priority" description="At YourBank, we understand the importance of keeping your financial 
    information secure. We employ robust security measures and advanced technologies 
    to protect your personal and financial data. Rest assured that when you bank with us, 
    your security is our utmost priority."/>
    <HowWeProtectTemplate/>
    <FAQLayout/>
    <FooterTemplate/>
    </>);
}

export default Security;