import LayoutHeaderWithButtons from "../shared/LayoutHeaderWithButtons";
import ProductDetailCard from "./ProductDetailCard";

function ProductsLayout()
{
    return (<div>
        <div>
            <LayoutHeaderWithButtons headingTextWhite="Our " headingTextColored="Products" 
            description="Discover a range of comprehensive and customizable banking products at YourBank, 
            designed to suit your unique financial needs and aspirations" leftButtonText="For Individuals" leftButtonLink="#"
            rightButtonText="For Businesses" rightButtonLink="#"/>    
        </div>
        <div>
            <ProductDetailCard imageLink="/Icon(2).png" heading="Checking Accounts" description="Enjoy easy and convenient access to your 
            funds with our range of checking account options. Benefit from features such as 
            online and mobile banking, debit cards, and free ATM access."/>
            <ProductDetailCard imageLink="/Icon(2).png" heading="Checking Accounts" description="Enjoy easy and convenient access to your 
            funds with our range of checking account options. Benefit from features such as 
            online and mobile banking, debit cards, and free ATM access."/>
            <ProductDetailCard imageLink="/Icon(2).png" heading="Checking Accounts" description="Enjoy easy and convenient access to your 
            funds with our range of checking account options. Benefit from features such as 
            online and mobile banking, debit cards, and free ATM access."/>
        </div>
    </div>)
}

export default ProductsLayout;