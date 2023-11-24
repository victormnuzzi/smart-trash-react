import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor, secondaryColor, titleFont } from "./variables";

export const ContentButton = styled.a`
    padding: 15px 25px;
    border-radius: 20px;
    transition: .5s;
    text-decoration: none;
    letter-spacing: 1px;
    cursor: pointer;
    border: 2px solid ${primaryColor};
    background-color: ${primaryColor};
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: ${titleFont};
    
    &:hover {
        background-color: transparent;
        color: ${primaryColor};
    }

`

export const SignInUpButton = styled.button`
    width: 100%;
    margin-top: 20px;
    padding: 15px 20px;
    border-radius: 10px;
    transition: .5s;
    text-decoration: none;
    letter-spacing: 1px;
    cursor: pointer;
    border: 2px solid ${primaryColor};
    background-color: ${primaryColor};
    color: #fff;
    font-size: 1.8rem;
    font-weight: bold;
    font-family: ${titleFont};

    &:hover {
        background-color: ${secondaryColor};
        border-color: ${secondaryColor};
        color: #fff;
    }
`

export const LinkButton = styled(Link)`
    padding: 15px 25px;
    border-radius: 20px;
    transition: .5s;
    text-decoration: none;
    letter-spacing: 1px;
    cursor: pointer;
    border: 2px solid ${primaryColor};
    background-color: ${primaryColor};
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: ${titleFont};
    
    &:hover {
        background-color: transparent;
        color: ${primaryColor};
    }
`

export const LogoutButton = styled.button`
    padding: 7px 15px;
    border-radius: 20px;
    transition: .5s;
    text-decoration: none;
    letter-spacing: 1px;
    cursor: pointer;
    border: 2px solid ${primaryColor};
    background-color: ${primaryColor};
    color: #fff;
    font-size: 1.3rem;
    font-family: ${titleFont};
    
    &:hover {
        border: 2px solid ${secondaryColor};
        background-color: ${secondaryColor};
    }
`
