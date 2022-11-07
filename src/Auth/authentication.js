import { React } from "react";
import { Authenticator , useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";



const Auth = () => {
  const { user } = useAuthenticator((context) => [context.user]);

  if(user){
     localStorage.setItem('username',user.username)
  }
  return (
    <Authenticator className="content"
    ></Authenticator>
  );
};
export default Auth;
