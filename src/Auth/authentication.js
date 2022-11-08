import { React } from "react";
import { Authenticator , useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";



const Auth = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  if(user){
     localStorage.setItem('username',user.username);
  }else{
    localStorage.setItem('username',null);
  }
  return (
    <div>
     
      <Authenticator className="content"></Authenticator>
    </div>
  );
};
export default Auth;
