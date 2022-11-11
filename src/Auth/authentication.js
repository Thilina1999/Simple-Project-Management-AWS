import { React } from "react";
import { Authenticator , useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";



const Auth = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  

  if(user){
     localStorage.setItem('username',user.username);
  }else{
    localStorage.setItem('username',null);
  }
  return (
      <div className="center">
        <Authenticator className="content" ></Authenticator>
      </div>
  );
};
export default Auth;
