import { } from 'react'
import { GreenSection, GreenSpan, AppTextContainer, AppImgContainer, AppBox } from '../assets/styles/Base.style.jsx';

import App1 from '../assets/img/app-home.jpg' 
import App2 from '../assets/img/app-lixeiras.jpg' 
import App3 from '../assets/img/app-ajuda.jpg' 

function Aplicativo(){
    return (
        <>
        <GreenSection>

            <AppTextContainer>
                <h2>Aplicativo</h2>
                <p>O aplicativo <GreenSpan>Smart Trash</GreenSpan> oferece monitoramento em tempo real da coleta de lixo, orientações sobre reciclagem e informações sobre resíduos. Também promove a conscientização sobre a reciclagem e incentiva a criação de um mundo mais sustentável e limpo.</p>
            </AppTextContainer>

            <AppImgContainer>
                <AppBox>
                    <h3>Aba Home</h3>
                    <img src={App1} alt='Menu Home do aplicativo' id='app-img'/>
                </AppBox>
                <AppBox>
                    <h3>Aba Lixeiras</h3>
                    <img src={App2} alt='Menu Lixeiras do aplicativo' id='app-img'/>
                </AppBox>
                <AppBox>
                    <h3>Aba Ajuda</h3>
                    <img src={App3} alt='Menu Ajuda do aplicativo' id='app-img'/>
                </AppBox>
            </AppImgContainer>

        </GreenSection>
        </>
    )
}


export default Aplicativo