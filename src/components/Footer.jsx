import { } from 'react'
import { useNavigate } from "react-router-dom";
import { FooterContainer, FooterContentContainer, InfoContainer, SocialMediaContainer, FooterMenu, FooterLogoST, MenuLinksContainer, FooterLinks, FooterHorizontalLine, FooterTextContainer, DeveloperLink } from '../assets/styles/Footer.style.jsx'
import LogoST from '../assets/img/logo-st-branco-nome.png';

import { MdEmail as EmailIcon } from "react-icons/md";
import { AiFillInstagram as InstagramIcon, AiFillFacebook as FacebookIcon, AiFillLinkedin as LinkedinIcon } from "react-icons/ai";


function Footer() {

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
            <FooterContainer>

                <FooterContentContainer>

                    <InfoContainer>
                        <FooterLogoST src={LogoST} alt="Logo Smart Trash" />

                        <FooterMenu>
                            <h2>Links</h2>
                            <nav>
                                <MenuLinksContainer>
                                    <li><FooterLinks to="/" >Home</FooterLinks></li>
                                    <li><FooterLinks to="/aplicativo" >Aplicativo</FooterLinks></li>
                                    <li><FooterLinks to="/sobre" >Sobre</FooterLinks></li>
                                    {!(getUser && getPassword) ? (
                                        <>
                                            <li><FooterLinks to="login">Login</FooterLinks></li>
                                            <li><FooterLinks to="cadastro">Cadastro</FooterLinks></li>

                                        </>
                                    ) : (
                                        <li><FooterLinks onClick={handleLogout}>Logout</FooterLinks></li>
                                    )}
                                </MenuLinksContainer>
                            </nav>
                        </FooterMenu>
                    </InfoContainer>

                    <nav>
                        <SocialMediaContainer>
                            <li><a href="#"><FacebookIcon size={44} /></a></li>
                            <li><a href="#"><InstagramIcon size={44} /></a></li>
                            <li><a href="#"><LinkedinIcon size={44} /></a></li>
                            <li><a href="#"><EmailIcon size={44} /></a></li>
                        </SocialMediaContainer>
                    </nav>
                </FooterContentContainer>


                <FooterHorizontalLine>

                    <FooterTextContainer>
                        <p>&copy; 2023 SMART TRASH | Desenvolvido por <DeveloperLink href="https://www.linkedin.com/in/victormnuzzi/" target="_blank" rel="noreferrer">Victor M. Nuzzi</DeveloperLink> e <DeveloperLink href="https://www.linkedin.com/in/henri-lopes-b54b6720a/" target="_blank" rel="noreferrer">Henri O. Lopes</DeveloperLink></p>
                    </FooterTextContainer>

                </FooterHorizontalLine>

            </FooterContainer>
        </>
    )
}

export default Footer