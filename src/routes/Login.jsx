import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { GreenSection, RedSpan } from '../assets/styles/Base.style.jsx'
import { SignInUpButton } from '../assets/styles/Button.style.jsx';
import { FormContainer, LoginForm, LoginFieldset, FormLoginHeader, InputLoginGroup, InputLoginBox, ButtonBox, SingUpLoginBox } from '../assets/styles/Form.style.jsx';

function Login() {

    const schema = yup.object({
        username: yup.string().required("Campo Usuário obrigatório"),
        password: yup.string().required("Campo Senha obrigatório")
    }).required();

    const { register, handleSubmit, formState: { errors } }
        = useForm({
            resolver: yupResolver(schema)
        })

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/usuarios')
            .then((resposta) => {
                return resposta.json();
            })
            .then((resposta) => {
                setUsuarios(resposta);
            })
    }, []);

    const navigate = useNavigate();

    const validarFormulario = (data) => {
        let usuarioValido = false;

        if (data.username == '' || data.password == "") {
            alert("Por favor, preencha todos os campos.")
        } else {
            for (const usuarioDados of usuarios) {
                if (data.username === usuarioDados.username && data.password === usuarioDados.password) {
                    let token = Math.random().toString(20).substring(2) +
                        Math.random().toString(20).substring(2);
                    sessionStorage.setItem('username', data.username);
                    sessionStorage.setItem('password', token);
                    usuarioValido = true;
                    alert("Seus dados foram registrados com sucesso.")
                    navigate('/');
                    break;
                }
            }
        }

        if (!usuarioValido) {
            alert("Usuário ou senha inválidos! Tente novamente")
        }
    };

    return (
        <>
            <GreenSection>
                <FormContainer>
                    <LoginForm onSubmit={handleSubmit(validarFormulario)}>
                        <LoginFieldset>
                            <FormLoginHeader>
                                <h2>Login</h2>
                            </FormLoginHeader>

                            <InputLoginGroup>

                                <InputLoginBox>
                                    <label htmlFor="username">Usuário</label>
                                    <input type="text" {...register('username')} placeholder='Usuário' />
                                    <RedSpan>{errors.username?.message}</RedSpan>
                                </InputLoginBox>

                                <InputLoginBox>
                                    <label htmlFor="password">Senha</label>
                                    <input type="password" {...register('password')} placeholder='Senha' />
                                    <RedSpan>{errors.password?.message}</RedSpan>
                                </InputLoginBox>

                                <ButtonBox>
                                    <SignInUpButton type="submit">Login</SignInUpButton>
                                </ButtonBox>

                                <SingUpLoginBox>
                                    <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
                                </SingUpLoginBox>

                            </InputLoginGroup>

                        </LoginFieldset>

                    </LoginForm>
                </FormContainer>
            </GreenSection>
        </>
    )
}

export default Login