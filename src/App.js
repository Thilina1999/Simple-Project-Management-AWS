import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectView from './containers/projectView';
import Auth from '../src/Auth/authentication'
import Home from '../src/containers/home'
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";


function App() {
   const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return (
    <div>
      <BrowserRouter>
        {authStatus === "configuring" && "Loading..."}
        {authStatus !== "authenticated" ? <Auth/> : <Home />}
        <Routes>
          <Route path="/home" element={<Home></Home>} exact></Route>
          <Route
            path="/project"
            element={<ProjectView></ProjectView>}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
