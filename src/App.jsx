/* ---------------------------- REACT ROUTER DOM ---------------------------- */
import {
  Routes,
  Route,
} from "react-router-dom";
/* ---------------------------- STYLED COMPONENTS --------------------------- */
import styled from "styled-components";
/* --------------------------------- SCREENS -------------------------------- */
import Home from './screens/Home'
import User from "./screens/User";
import Reservations from "./screens/Reservations";
import Item from "./screens/Item";

/* ------------------------------- COMPONENTES ------------------------------ */
import NavBar from './components/sideBar/SideBar';
/* --------------------------------- IMAGNES -------------------------------- */
import bgPoints from './img/bg.png'

function App() {
  return (
    <AppContainer>
      <AppContainerLg className="d-flex flex-row">
        <NavBar></NavBar>
        <main className="body__container p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/item/:id" element={<Item />} />
          </Routes>
        </main>
      </AppContainerLg>
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  
  width: 100%;
  height: 100vh ;
  background-image: url(${bgPoints});
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items:center;

`

const AppContainerLg = styled.div`
  width: 100%;
  height: 100%;
  max-height: 80vh;
  max-width: 1200px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  .body__container{
    overflow-y: scroll;
    width: 100%;
    &::-webkit-scrollbar {
    -webkit-appearance: none;
    }

    &::-webkit-scrollbar:vertical {
        width:10px;
    }

    &::-webkit-scrollbar-button:increment {
      display: none;
    } 
    &::-webkit-scrollbar-button{
      display:none;
    }

    &::-webkit-scrollbar:horizontal {
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #034d64;
        border-radius: 20px;
        border: 2px solid #034d64;
    }

    &::-webkit-scrollbar-track {
        border-radius: 10px;  
    }
  }
`