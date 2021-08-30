import './App.css';
import Dashboard from './layouts/Dashboard';
import Navbar from './layouts/Navbar';
import WebsiteInfo from './layouts/WebsiteInfo';

function App() {
  return (
    <div className="App">
      <Navbar />
     
        <Dashboard /> 
     
      <WebsiteInfo />
    </div>
  );
}

export default App;
