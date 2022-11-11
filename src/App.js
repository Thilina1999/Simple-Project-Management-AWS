import './App.css';
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import ProjectView from './containers/projectView';
import Auth from '../src/Auth/authentication'
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";



function App() {
   const { authStatus } = useAuthenticator((context) => [context.authStatus]);
    
    console.log(authStatus)

  return (
    <div className="app">
      <BrowserRouter>
        {authStatus === "configuring" && "Loading..."}
        {authStatus !== "authenticated" ? (
          <Auth/>
        ) : (
          <ProjectView/>
        )}
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
