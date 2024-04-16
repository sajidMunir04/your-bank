import LoginForm from "../components/accounts/LoginForm";
import TestimonialLayout from "../components/home/TestimonialLayout";
import FooterTemplate from "../components/shared/FooterTemplate";
import HeaderTemplate from "../components/shared/HeaderTemplate";

function Login() {
    return (<>
    <HeaderTemplate/>
    <LoginForm/>
    <TestimonialLayout/>
    <FooterTemplate/>
    </>);
}

export default Login;