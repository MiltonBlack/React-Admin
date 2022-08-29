import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import RecentOrders from './components/RecentOrders/RecentOrders';
import Sidebar from './components/Sidebar/Sidebar';
import Top from './components/TopSection/Top';

function App() {

  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!menu)
  }
  return (
    <div className="App">
      <div className='container'>
        <Sidebar menu={menu} onClick={toggleMenu}/>
        <div>   
        <Main/>
        <RecentOrders/>
        </div>
        <Top onClick={toggleMenu}/>
      </div>
    </div>
  );
}

export default App;
