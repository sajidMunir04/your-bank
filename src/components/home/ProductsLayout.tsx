import { useState } from "react";
import LayoutHeaderWithButtons from "../shared/LayoutHeaderWithButtons";
import ProductDetailCard from "./ProductDetailCard";
import styles from "./ProductsLayout.module.css";

function ProductsLayout()
{
    const [details,setDetails] = useState('personal');

    return (<div className={styles.container}>
        <div>
            <LayoutHeaderWithButtons headingTextWhite="Our " headingTextColored="Products" 
            description="Discover a range of comprehensive and customizable banking products at YourBank, 
            designed to suit your unique financial needs and aspirations" leftButtonText="For Individuals" leftButtonEvent={() => setDetails('business')}
            rightButtonText="For Businesses" rightButtonEvent={() => setDetails('personal')}/>    
        </div>
        <div className={styles.contentContainer}>
            {details == 'personal' && <ProductDetailCard imageLink="/Icon.svg" heading="Checking Accounts 1" description="Enjoy easy and convenient access to your 
            funds with our range of checking account options. Benefit from features such as 
            online and mobile banking, debit cards, and free ATM access."/>}
            {details == 'personal' && <ProductDetailCard imageLink="/Icon.svg" heading="Checking Accounts 2" description="Enjoy easy and convenient access to your 
            funds with our range of checking account options. Benefit from features such as 
            online and mobile banking, debit cards, and free ATM access."/>}
            {details == 'personal' && <ProductDetailCard imageLink="/Icon.svg" heading="Checking Accounts 3" description="Enjoy easy and convenient access to your 
            funds with our range of checking account options. Benefit from features such as 
            online and mobile banking, debit cards, and free ATM access."/>}
            {details == 'business' && <ProductDetailCard imageLink="/Icon.svg" heading="Business Accounts 1" description="Enjoy easy and convenient access to your 
            funds with our range of checking account options. Benefit from features such as 
            online and mobile banking, debit cards, and free ATM access."/>}
            {details == 'business' && <ProductDetailCard imageLink="/Icon.svg" heading="Business Accounts 2" description="Enjoy easy and convenient access to your 
            funds with our range of checking account options. Benefit from features such as 
            online and mobile banking, debit cards, and free ATM access."/>}
            {details == 'business' && <ProductDetailCard imageLink="/Icon.svg" heading="Business Accounts 3" description="Enjoy easy and convenient access to your 
            funds with our range of checking account options. Benefit from features such as 
            online and mobile banking, debit cards, and free ATM access."/>}
        </div>
    </div>)
}

export default ProductsLayout;