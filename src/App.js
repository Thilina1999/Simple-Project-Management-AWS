import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './Auth/authentication';
import ProjectView from './containers/projectView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth></Auth>
        <Routes>
          <Route pathe="/projectView" element={<ProjectView></ProjectView>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
