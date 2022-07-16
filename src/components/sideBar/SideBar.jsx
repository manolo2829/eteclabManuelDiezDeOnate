import { useState } from "react";
/* ---------------------------- STYLED COMPONENTS --------------------------- */
import styled from "styled-components";
/* ------------------------------- LINKS DATA ------------------------------- */
import { Links } from "../../data/data";
/* ------------------------------- COMPONENTES ------------------------------ */
import NavLinkItem from "./NavLinkItem";
import BurguerBtn from "./BurguerBtn";




const SideBar = () => {

    const [sideBarState, setSideBarState] = useState(false);
    
    const changeState = () =>{
        setSideBarState(!sideBarState)
    }

    return (  
        <header>
            <SideBarContainer className={sideBarState ? 'open' : ''}>
                <BurguerBtn state={sideBarState} click={changeState}></BurguerBtn>
                <div className="links__container">
                    {Links.map(({ text, to, svg })=> <NavLinkItem key={text} state={sideBarState} to={to} text={text} svg={svg} />)}
                </div>
            </SideBarContainer>
        </header>
    );
}
 
export default SideBar;


const SideBarContainer = styled.nav`

    border-radius: 20px;
    width: 60px;
    height: 80vh;
    background-color: #034d64;
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


    @media (max-width: 768px){ 
        position: fixed;
        height: 50px;
        overflow: hidden;
        
        .nav-icon-5{
            margin-top: 15px
        }

        &.open{
        width: 100%;
        max-width: 500px;
        height: 80vh;
        align-items: flex-end;

        a{
            text-decoration: none;
        }
        .bars__icon{
            cursor: pointer;
            margin-right: 17.5px;
        }

        .links__container{
            width: 100%;
        }
    }

    }
`