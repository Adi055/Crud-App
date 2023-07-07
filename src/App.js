import logo from './logo.svg';
import './App.css';
import { Admin } from './Pages/Admin';
import Home from './Pages/Home';
import { AllRoutes } from './Pages/MainRoutes';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
     
      <AllRoutes/>
    </div>
  );
}

export default App;
