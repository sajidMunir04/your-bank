import FormButton from "./FormButton";
import FormExternalServiceButton from "./FormExternalServiceButton";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormORSeparator from "./FormORSeparator";


function SignUpForm()
{
    return (<div>
        <FormHeader heading="Sign Up" description="Join our community today! Create an account 
        to unlock exclusive features and personalized experiences."/>
        <form>
            <div>
                <div>
                    <FormInput inputType="text" placeholder="Enter First Name"/>
                </div>
                <div>
                    <FormInput inputType="text" placeholder="Enter Last Name"/>
                </div>
                <div>
                    <FormInput inputType="email" placeholder="Enter your Email"/>
                </div>
                <div>
                    <FormInput inputType="password" placeholder="Enter your Password"/>
                </div>
            </div>
            <div>
                <div>
                    <FormButton buttonText="Sign Up"/>
                </div>
                <div>
                    <FormButton buttonText="Login"/>
                </div>
            </div>
            <div>
                <FormORSeparator/>
            </div>
            <div>
                <FormExternalServiceButton imageLink="/Icon(9).png"/>
                <FormExternalServiceButton imageLink="/Icon(9).png"/>
                <FormExternalServiceButton imageLink="/Icon(9).png"/>
            </div>
        </form>
    </div>);
}

export default SignUpForm;