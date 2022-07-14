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
/* ------------------------------- COMPONENTES ------------------------------ */
import NavBar from './components/NavBar';
/* --------------------------------- IMAGNES -------------------------------- */
import bgPoints from './img/bg.png'

function App() {
  return (
    <AppContainer>
      <AppContainerLg className="d-flex flex-row">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
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
`