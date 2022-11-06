import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'




const Auth = () => {
    return (
        <Authenticator
          socialProviders={["amazon", "apple", "facebook", "google"]}
        >
        </Authenticator>
    );
};
export default Auth;