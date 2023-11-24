import { } from 'react';
import { GraySection, CardTitle, CardsContainer, FeedbackContainer, FeedbackTitleContainer } from '../assets/styles/Base.style';

import LogoGoogle from '../assets/img/logo-google.png';
import LogoNubank from '../assets/img/logo-nubank.png';
import LogoIBM from '../assets/img/logo-ibm.png';
import LogoStarbucks from '../assets/img/logo-starbucks.png';

function Feedbacks(){
    return(
        <>

        <GraySection>
            <div className="container-card-title">
                <CardTitle>Feedbacks</CardTitle>
            </div>

            {/* Início Cards */}
            
            <CardsContainer>
                {/* 1o Card */}
                <FeedbackContainer>
                    <FeedbackTitleContainer>
                        <img src={LogoGoogle} alt="Logo Google" id="google"/>
                        <h2>Google</h2>
                    </FeedbackTitleContainer>
                    <p>Estamos impressionados com os resultados surpreendentes da implementação das lixeiras inteligentes da Smart Trash. Nossa empresa viu uma grande melhoria na coleta seletiva e na taxa de reciclagem, superando todas as expectativas. Parabenizamos a Smart Trash por fornecer uma solução altamente eficaz.</p>
                </FeedbackContainer>

                {/* 2o Card */}
                <FeedbackContainer>
                    <FeedbackTitleContainer>
                        <img src={LogoNubank} alt="Logo Nubank" id="nubank"/>
                        <h2>Nubank</h2>
                    </FeedbackTitleContainer>
                    <p>Temos o prazer de implementar as lixeiras inteligentes da Smart Trash em nossos escritórios. Essa solução inovadora facilita a coleta seletiva e aumenta a reciclagem, alinhando-se aos nossos valores de sustentabilidade e cuidado com o meio ambiente. Juntos, fazemos a diferença!</p>
                </FeedbackContainer>

                {/* 3o Card */}
                <FeedbackContainer>
                    <FeedbackTitleContainer>
                        <img src={LogoIBM} alt="Logo IBM" id="ibm"/>
                        <h2>IBM</h2>
                    </FeedbackTitleContainer>
                    <p>Expressamos nossa profunda gratidão e admiração pela excepcional parceria estabelecida com a Smart Trash. Sua tecnologia revolucionária tem impulsionado de maneira notável a coleta seletiva e a reciclagem em nossas cidades-alvo, proporcionando resultados surpreendentes.</p>
                </FeedbackContainer>

                {/* 4o Card */}
                <FeedbackContainer>
                    <FeedbackTitleContainer>
                        <img src={LogoStarbucks} alt="Logo Starbucks" id="starbucks"/>
                        <h2>Starbucks</h2>
                    </FeedbackTitleContainer>
                    <p>Agradecemos à Smart Trash pela lixeira inteligente avançada, cuja tecnologia inovadora tem um impacto positivo notável em comunidades afetadas pelo problema ambiental. Recomendamos suas soluções eficazes para outras empresas e parabenizamos pelo trabalho excepcional.</p>
                </FeedbackContainer>

            </CardsContainer>
        </GraySection>
        
        {/* Fim Cards */}
        
        </>
    )
}

export default Feedbacks