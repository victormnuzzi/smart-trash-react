import { } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderBrand, HeaderMenu } from '../assets/styles/Header.style.jsx';
import { LogoutButton } from '../assets/styles/Button.style.jsx'
import LogoST from '../assets/img/logo-st-verde.png';

function Nav (){

    const navigate = useNavigate();

    const getUser = sessionStorage.getItem('username');
    const getPassword = sessionStorage.getItem('password');

    const handleLogout = async () => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
        alert("Saindo da sessão.");
        navigate('/');
      }

return (
    <>
    <HeaderContainer>
        <HeaderBrand>
            <img src={LogoST} alt="Logo Smart Trash" />
            <h2>Smart Trash</h2>
        </HeaderBrand>
        <HeaderMenu>
            <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="aplicativo">Aplicativo</Link></li>
                <li><Link to="sobre">Sobre</Link></li>
                {! (getUser && getPassword) ? (
                    <>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="cadastro">Cadastro</Link></li>
                    
                    </>
                ) : (
                    <li><LogoutButton onClick={handleLogout}>Logout</LogoutButton></li>
                )}
                
            </ul>
        </HeaderMenu>
    </HeaderContainer>
    </>
)
}

export default Nav
