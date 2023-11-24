import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryColor, secondaryColor, titleFont } from './variables';

// ------------ Footer ------------

export const FooterContainer = styled.div `
    height: 350px;
    width: 100%;
    background-color: ${primaryColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

// ------------ Footer ------------


export const FooterContentContainer = styled.div`
    width: 100%;
    height: 87%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 140px;
`

// ------------ Info Media ------------

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 72px;
`

// Logo 

export const FooterLogoST = styled.img`
    width: 240px;
`

// Links Menu 

export const FooterMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;

    h2 {
        font-size: 1.7em;
        letter-spacing: 4px;
        color: #fff;
        font-family: ${titleFont};
    }
`

export const MenuLinksContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 13px;
`

export const FooterLinks = styled(Link)`
    color: #fff;   
    text-decoration: none;
    transition: .7s;
    font-weight: bold;

    &:hover {
        color: ${secondaryColor};
    }
`

// ------------ Social Media ------------

export const SocialMediaContainer = styled.ul`
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 26px;

    svg {
        color: #fff;
        transition: .7s;

        &:hover { 
            color: ${secondaryColor};
        }
    }
`

// ------------ Copyright ------------

export const FooterHorizontalLine = styled.div `
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    height: 13%;
    background-color: ${secondaryColor};
    `

export const FooterTextContainer = styled.div `
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DeveloperLink = styled.a `
    text-decoration: none;
    color: ${primaryColor};
    transition: .5s;
    
    &:hover{
        color: #00c3ff;
    }
`


