import logo from './logo.svg';

import SideBar from './components/SideBar';
import DashBoardPage from './components/DashBoardPage';
import NavBar from './components/NavBar';
import './App.css';
function App() {
  return (
    <div className='bg-black   mx-auto h-full overflow-hidden'>
      <nav className='w-full'>
      <NavBar/>
      </nav>
      <div className='w-full h-full flex md:flex-row flex-col' >
        <SideBar/>
        <DashBoardPage/>
      </div>

    </div>
  );
}

export default App;
