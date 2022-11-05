import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import ProjectView from '../containers/projectView';


const Auth = () => {
    return (
      <div>
        <Authenticator
          socialProviders={["amazon", "apple", "facebook", "google"]}
        >
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user.username}</h1>
              <ProjectView></ProjectView>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </div>
    );
};
export default Auth;