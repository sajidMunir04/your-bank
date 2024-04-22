import FormButton from "./FormButton";
import FormExternalServiceButton from "./FormExternalServiceButton";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormORSeparator from "./FormORSeparator";
import stlyes from "./LoginForm.module.css";


function LoginForm()
{
    return (<div className={stlyes.container}>
        <div>

        </div>
        <div className={stlyes.contentContainer}>
        <FormHeader heading="Login" description="Welcome back! Please log in to access your account."/>
        <form className={stlyes.form}>
            <div className={stlyes.inputContainer}>
                <div className={stlyes.inputFieldContainer}>
                    <FormInput inputType="email" placeholder="Enter your email"/>
                </div>
                <div className={stlyes.inputFieldContainer}>
                    <FormInput inputType="password" placeholder="Enter your password"/>
                </div>
            </div>
            <div>
                <a className={stlyes.link} href="#">Forgot Password?</a>
            </div>
            <div className={stlyes.buttonsContainer}>
                <div className={stlyes.buttonParent}>
                    <FormButton isGreen={true} buttonText="Login"/>
                </div>
                <div className={stlyes.buttonParent}>
                    <FormButton buttonText="Sign Up"/>
                </div>
            </div>
            <div className={stlyes.lineArea}>
                <FormORSeparator/>
            </div>
            <div className={stlyes.externalLinkSection}>
                <FormExternalServiceButton imageLink="/images/common/google.svg"/>
                <FormExternalServiceButton imageLink="/images/common/facebook.svg"/>
                <FormExternalServiceButton imageLink="/images/common/apple.svg"/>
            </div>
        </form>     
        </div> 
    </div>);
}

export default LoginForm;