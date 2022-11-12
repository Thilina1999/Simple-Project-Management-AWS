import { React } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";



const Auth = () => {

  return (
      <div className="center">
        <Authenticator className="content" ></Authenticator>
      </div>
  );
};
export default Auth;
