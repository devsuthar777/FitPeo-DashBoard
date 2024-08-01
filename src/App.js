import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import DashBoardPage from './components/DashBoardPage';
import NavBar from './components/navBar';

function App() {
  return (
    <>
      <nav>
      <NavBar/>
      </nav>
      <div>
        <SideBar/>
        <DashBoardPage/>
      </div>

    </>
  );
}

export default App;
