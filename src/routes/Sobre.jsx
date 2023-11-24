import { } from 'react'
import { ContentButton } from '../assets/styles/Button.style'
import { GreenSpan, GraySection, GridContainer, GridTextContainer, SobreImgContainer } from '../assets/styles/Base.style'
import LogoSmartTrash from '../assets/img/logo-st-verde-nome.png'

function Sobre(){
    return(
        <>
        <GraySection>
            <GridContainer>

                <GridTextContainer>
                    <h2>Sobre Nós</h2>
                    
                    <p>A <GreenSpan>Smart Trash</GreenSpan> é uma empresa pioneira em gestão de resíduos, com foco em tecnologia de lixeiras inteligentes para promover a coleta seletiva e a reciclagem. Seus valores centram-se na sustentabilidade e inovação para um futuro mais limpo e saudável.</p> 
                    <p>Por meio de soluções inovadoras, a <GreenSpan>Smart Trash</GreenSpan> busca elevar a conscientização ambiental, reduzir o impacto e promover um mundo mais sustentável, oferecendo produtos e serviços de alta qualidade para aprimorar a coleta seletiva e fomentar práticas responsáveis em relação aos resíduos.</p>
                    <ContentButton href='#'>Saiba mais</ContentButton>
                </GridTextContainer>

                <SobreImgContainer>
                    <img src={LogoSmartTrash} alt="Logo Smart Trash"/>
                </SobreImgContainer>

            </GridContainer>
        </GraySection>
        </>
    )
}

export default Sobre