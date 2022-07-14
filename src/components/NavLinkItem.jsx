import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavLinkItem = ({text, to, svg, state}) => {
  return (
    <NavLinkContainer>
        <NavLink className={`link ${state ? 'open' : ''}`} to={to}>
            <div>{svg}</div>
            {state ? <p>{text}</p> : null }
        </NavLink>
    </NavLinkContainer>
    
  )
}

export default NavLinkItem

const NavLinkContainer = styled.div`

    .link{

        &:hover{
            path{
                fill: white;
            }
        }

        width: 60px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition-duration: 0.3s;

        div{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        a{
            &:hover{
                path{
                    fill: white;
                }
            }
            
        }

        &:hover{
            path{
                fill: white;
            }
        }

        &[aria-current]{
            position: relative;
            color: #fe4d44;
            background-color: #1f1f1f;

            path{
                fill: #fe4d44;
            }

            &::after{
                content: '';
                position: absolute;
                width: 3px;
                height: 50px;
                background-color: #fe4d44;
                left: 0;
                top: 0;
            }
        }

        &.open{
            gap: 15px;
            width: 200px;
            justify-content: start;
            padding-left: 2rem;

            p{
                margin: 0;
                color: #8f8f8f;
                font-weight: bold;
                font-size: 14px;
                padding-bottom: 2px;
            }
            

            &:hover{
                p{
                    color: #fff;
                }

                path{
                    fill: #fff;
                }
            }   
        }
    }


`