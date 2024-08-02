import logo from './logo.svg';

import SideBar from './components/SideBar';
import DashBoardPage from './components/DashBoardPage';
import NavBar from './components/NavBar';
import './App.css';
function App() {
  return (
    <div className='bg-black  h-full w-11/12 mx-auto'>
      <nav className='w-full'>
      <NavBar/>
      </nav>
      <div className='w-full h-full flex' >
        <SideBar/>
        <DashBoardPage/>
      </div>

    </div>
  );
}

export default App;
