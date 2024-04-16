import SignUpForm from "../components/accounts/SignUpForm";
import TestimonialLayout from "../components/home/TestimonialLayout";
import FooterTemplate from "../components/shared/FooterTemplate";
import HeaderTemplate from "../components/shared/HeaderTemplate";


function SignUp() {
    return (<>
    <HeaderTemplate/>
    <SignUpForm/>
    <TestimonialLayout/>
    <FooterTemplate/>
    </>);
}

export default SignUp;