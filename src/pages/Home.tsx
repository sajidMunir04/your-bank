import FAQLayout from "../components/home/FAQLayout";
import FeaturesLayout from "../components/home/FeaturesLayout";
import MainBanner from "../components/home/MainBanner";
import ProductsLayout from "../components/home/ProductsLayout";
import TestimonialLayout from "../components/home/TestimonialLayout";
import UseCasesLayout from "../components/home/UseCasesLayout";
import FooterTemplate from "../components/shared/FooterTemplate";
import HeaderTemplate from "../components/shared/HeaderTemplate";
import PromotionalBanner from "../components/shared/PromotionalBanner";


function Home()
{
    return (<>
    <HeaderTemplate/>
    <MainBanner/>
    <ProductsLayout/>
    <UseCasesLayout/>
    <FeaturesLayout/>
    <FAQLayout/>
    <TestimonialLayout/>
    <PromotionalBanner headingTextWhite='Start your financial journey with ' 
      headingTextColored='YourBank today!' buttonText='Open Account' description='Ready to take control of your finances? Join YourBank now, 
      and let us help you achieve your financial goals with our tailored solutions and 
      exceptional customer service'/>
    <FooterTemplate/>
    </>);
}

export default Home;