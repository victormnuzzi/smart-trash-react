import styled from 'styled-components';
import { primaryColor, titleFont, bgGray, bgGreen } from './variables.jsx';
import HeroBackgroundImg from '../img/hero.jpeg'

// ------------------------ Base Styles ------------------------

export const BaseSection = styled.section`
    min-height: 70vh;
    padding: 7% 12%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

export const GraySection = styled(BaseSection)`
    background-color: ${bgGray};
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
`

export const GreenSection = styled(BaseSection)`
    background-color: ${bgGreen};
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
`

export const GreenSpan = styled.span`
    font-weight: bold;
    color: ${primaryColor};
`

export const RedSpan = styled.span`
    color: #ff1d1d;
`

export const BaseTextContainer = styled.div`
    h2 {
        font-size: 4rem;
        font-weight: bolder;
        font-family: ${titleFont};
    }
    
    p {
        line-height: 1.5;
        font-size: 1.1rem;
    }
    
`

// ------------------------ Hero ------------------------

export const HeroContainer = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(${HeroBackgroundImg});
    width: 100%;
    height: calc(100vh - 86px);
    color: #fff;
    display: flex;
    justify-content: right;
`

export const HeroContent = styled.div `
    height: 100%;
    width: 60%;
    padding: 0 8%;
    display: flex; 
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 36px;
    
    h1 {
        font-size: 8rem;
        font-family: ${titleFont};
    }
    
    p {
        font-size: 1.4rem;
        
    }
`

// ------------------------ Grid | Sobre e Lixeira------------------------


export const GridContainer = styled.div `
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 25px;
`

export const GridTextContainer = styled(BaseTextContainer) `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 25px;

    h2 {
        text-align: center;
    }
`

export const GridImgContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

// ------------------------ Sobre ------------------------

export const SobreImgContainer = styled(GridImgContainer) `
    img {
        max-height: 500px;
    }
`

// ------------------------ Lixeira Inteligente ------------------------

export const LixeiraImgContainer = styled(GridImgContainer) `
    img {
        max-height: 400px;
        width: 100%;
    }
`
// ------------------------ Coleta Seletiva ------------------------

export const ColetaImgContainer = styled(GridImgContainer)`
    img {
        border-radius: 16px;
        max-width: 100%;
        max-height: 90%;
    }
    `

export const ColetaGridContainer = styled(GridContainer)`
    gap: 50px;
    border-radius: 26px;
    padding: 20px 20px;
    box-shadow: 0 0 30px 0 #b5b3b3;
    background-color: #fff;
    `

// ------------------------ Feedbacks ------------------------

export const CardTitle = styled.h2`
    font-size: 4rem;
    font-weight: bolder;
    margin-bottom: 40px;
    font-family: ${titleFont};
`

export const CardsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    padding: 2rem;
    margin: auto; 
    gap: 56px;  
`

export const FeedbackContainer = styled.div`
    background-color: #fff;
    border-radius: 26px;
    padding: 40px;
    box-shadow: 0 0 30px 0 #b5b3b3;
    transition: .5s;

    &:hover {
        cursor: pointer;
        transform: scale(1.15);
        box-shadow: 0 0 30px 0 #2b8a40;
    }

    p {
        font-size: 1rem;
        margin-top: 20px
    
    }
`

export const FeedbackTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
    #nubank, #google {
        height: 40px;
    }
    
    #ibm {
        height: 30px;
    }
    
    #starbucks {
        height: 50px;
    }
    
    h2 {
        font-size: 2.4rem;
        text-align: center;
        margin: auto 0;
    }
`
// ------------------------ Aplicativo ------------------------

export const AppTextContainer = styled(BaseTextContainer)`
    text-align: center;
    padding: 0 20%;
    
    p {
        margin: 40px 0 50px 0;
    }
`

export const AppImgContainer = styled.div`
    width: 100%;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
`

export const AppBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-color-gray);
    padding: 40px 40px;
    border-radius: 20px;
    background-color: #fff;

    h3 {
        font-size: 2.8rem;
        font-family: var(--fonte-titulo);
        text-align: center;
        margin-bottom: 26px;
        font-family: ${titleFont};
    }

    img {
        border: 6px solid #797676;
        border-radius: 20px;
        width: 100%;
        box-shadow: 0 10px 20px 0 #b5b3b3;
        transition: .5s;
        
        &:hover {
            box-shadow: 0 0 20px 0 #2b8a40;
            transform: scale(1.1)
        }
    }
`
