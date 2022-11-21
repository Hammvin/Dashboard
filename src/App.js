import './App.css';
import './Components/Navbar.css'
import  { Routes, Route} from 'react-router-dom';
import DashBoard from './Components/DashBoard';
import NavBar from './Components/NavBar';
import Reports from './Components/Reports';
import Analytics from './Components/Analytics';
import Accounts from './Components/Accounts';
import Users from './Components/Users';
import Settings from './Components/Settings';

function App() {
  return (
    <>
         <NavBar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/Analytics" element={<Analytics />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/settings" element={<Settings />}/>
        </Routes>
    </>
      
  );
}

export default App;
