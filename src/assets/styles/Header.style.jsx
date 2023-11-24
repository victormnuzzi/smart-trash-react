import styled from 'styled-components';
import { primaryColor, secondaryColor, titleFont } from './variables';

export const HeaderContainer = styled.header`
    height: 86px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    margin-right: 40px;
    font-family: ${titleFont};
    
    img {
        margin-right: 10px;
        height: 60px;
    }
    
    h2 {
        color: ${primaryColor};
        font-size: 2rem;
    }
`

export const HeaderBrand = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const HeaderMenu = styled.nav`
    display: flex;
    flex-direction: row;
    
    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        list-style: none;
        gap: 100px;
        font-size: 1.2em;

        li {
            list-style: none;
            
            a {
                font-size: 1.6rem;
                text-decoration: none;
                color: #fff;
                transition: .7s;
                color: ${primaryColor};
                
                &:hover {
                    color: ${secondaryColor};
                }

            }
        }
    }
    

`
