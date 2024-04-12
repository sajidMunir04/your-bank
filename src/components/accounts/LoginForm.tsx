import FormButton from "./FormButton";
import FormExternalServiceButton from "./FormExternalServiceButton";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormORSeparator from "./FormORSeparator";


function LoginForm()
{
    return (<div>
      <FormHeader heading="Login" description="Welcome back! Please log in to access your account."/>
      <form>
        <div>
            <div>
                <FormInput inputType="email" placeholder="Enter your email"/>
            </div>
            <div>
                <FormInput inputType="password" placeholder="Enter your password"/>
            </div>
        </div>
        <div>
            <a href="#">Forgot Password?</a>
        </div>
        <div>
            <div>
                <FormButton buttonText="Login"/>
            </div>
            <div>
                <FormButton buttonText="Sign Up"/>
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

export default LoginForm;