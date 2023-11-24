import styled from 'styled-components';
import { bgGray, primaryColor, titleFont } from './variables';


// -------------------- Login - Formulário --------------------

export const FormContainer = styled.div`
    width: 500px;
    min-height: 540px;
    background-color: ${bgGray};
    box-shadow: 0 10px 10px 0 #b5b3b3;
    border-radius: 10px;
`

export const LoginForm = styled.form`
    width: 100%;
    height: 100%;
    padding: 8% 10%;
`

export const LoginFieldset = styled.fieldset`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 0;
`

export const FormLoginHeader = styled.div`
    width: 100%;
    text-align: center;

    h2 {
        height: 100%;
        margin: 0 auto;
        font-family: ${titleFont};
        font-size: 4rem;
    }
`

export const InputLoginGroup = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const InputLoginBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
        font-size: 1.4rem;
        font-weight: bold;
    }
    
    input {
        padding: 8px;
        border: 0px;
        border-bottom: 2px solid #d1d1d1;
        font-size: 1.2rem;
        background-color: ${bgGray};
    }
`

export const ButtonBox = styled.div`
    width: 100%;
`

export const SingUpLoginBox = styled.div`
    font-size: 1.2rem;
    a {
        text-decoration: none;
        margin-left: 6px;
    }
`

// -------------------- Cadastro - Formulário --------------------

export const CadastroContainer = styled.div`
    border: 2px solid ${primaryColor};
    width: 84%;
    border-radius: 7px;
`

export const SignUpButtonBox = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;
    gap: 40px;
`

export const CadastroForm = styled.form`
    width: 100%;
    height: 100%;
    padding: 5% 5%;
    background-color: ${bgGray};
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

export const FormCadastroHeader = styled.div`
    width: 100%;
    background-color: ${primaryColor};
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 2%;
    
    h2 {
        font-size: 1.6rem;
        color: #fff;
    }
`

export const CadastroFieldset = styled.fieldset`
    min-height: 200px;
    width: 100%;
    border: 0;
`

export const FieldsetLegend = styled.legend`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 auto;
    margin-bottom: 40px;
    `

export const InputFlex = styled.div`
    display: flex;
    gap: 50px;
    width: 100%;
`

export const InputCadastroGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
`

export const InputCadastroBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
        font-size: 1.3rem;
        font-weight: bold;

    }
    
    input {
        padding: 15px;
        border: 1px solid #d1d1d1;
        font-size: 1.2rem;
    }
`