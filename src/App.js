import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import DashBoardPage from './components/DashBoardPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='bg-richblue-700  h-screen w-11/12 mx-auto'>
      <nav className='w-full'>
      <NavBar/>
      </nav>
      <div className='w-full h-full'>
        <SideBar/>
        <DashBoardPage/>
      </div>

    </div>
  );
}

export default App;
