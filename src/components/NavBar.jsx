import { useState } from "react";
/* ---------------------------- STYLED COMPONENTS --------------------------- */
import styled from "styled-components";
/* ------------------------------- LINKS DATA ------------------------------- */
import { Links } from "../data/data";
/* ------------------------------- COMPONENTES ------------------------------ */
import NavLinkItem from "./NavLinkItem";
import BurguerBtn from "./BurguerBtn";




const NavBar = () => {

    const [sideBarState, setSideBarState] = useState(true);
    
    const changeState = () =>{
        setSideBarState(!sideBarState)
    }

    return (  
        <header>
            <SideBar className={sideBarState ? 'open' : ''}>
                <BurguerBtn state={sideBarState} click={changeState}></BurguerBtn>
                <div className="links__container">
                    {Links.map(({ text, to, svg })=> <NavLinkItem key={text} state={sideBarState} to={to} text={text} svg={svg} />)}
                </div>
            </SideBar>
        </header>
    );
}
 
export default NavBar;


const SideBar = styled.nav`
    width: 60px;
    height: 80vh;
    background-color: #282828;
    transition-duration: .3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    .links__container{
        display: flex;
        flex-direction: column;
        margin-top: 80px;
    }    

    &.open{
        width: 200px;
        align-items: flex-end;

        a{
            text-decoration: none;
        }
        .bars__icon{
            cursor: pointer;
            margin-right: 17.5px;
        }
    }

    .nav-icon-5{
        margin-top: 30px
    }
`