import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { GreenSection, RedSpan } from '../assets/styles/Base.style.jsx';
import { SignInUpButton } from '../assets/styles/Button.style.jsx';
import { SignUpButtonBox, CadastroFieldset, FieldsetLegend, CadastroForm, InputFlex, InputCadastroGroup, InputCadastroBox, CadastroContainer, FormCadastroHeader } from '../assets/styles/Form.style.jsx';

function Cadastro() {

    const schema = yup.object({
        name: yup.string().required("Campo Nome Completo obrigatório"),
        cpf: yup.string().min(11, 'CPF deve conter 11 dígitos').required("Campo cpf Obrigatório"),
        email: yup.string().email("Digite um email Válido").required("Campo email obrigatório"),
        telefone: yup.string().min(11, 'Telefone deve conter 11 dígitos').required("Campo Telefone obrigatório"),
        username: yup.string().required("Campo Usuário obrigatório"),
        password: yup.string().required("Camp Senha obrigatório"),
        cep: yup.string().min(8, 'CEP deve conter 8 dígitos').required("Campo CEP obrigatório"),
        rua: yup.string().required("Campo Rua obrigatório"),
        numero: yup.string().required("Campo Número obrigatório"),
        bairro: yup.string().required("Campo Bairro obrigatório"),
        cidade: yup.string().required("Campo Cidade obrigatório")

    }).required();

    const { register, formState: { errors }, setValue, setFocus }
        = useForm({
            resolver: yupResolver(schema)
        })

    //useParams
    let { id } = useParams();

    //useState para criar um novo cadastro
    const [novo, setNovo] = useState({
        id,
        name: "",
        email: "",
        telefone: "",
        username: "",
        password: "",
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: ""
        }
    )

    const handleChange = (e) => {
        setNovo({ ...novo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/usuarios/${id ? id : ''}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novo),
        }).then(() => {
            window.location = '/';
        });
    }

    useEffect(()=>{
        if(id){
          fetch(`http://localhost:5000/usuarios/${id}`)
          .then((res)=>{
            return res.json();
          })
          .then((data)=>{
            setNovo(data);
          });
        }
        },[id])

        function buscarCep(e) {
            const cep = e.target.value.replace(/\D/g, '');
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then((res) => res.json())
                .then((data) => {
                    setNovo((prevState) => ({
                        ...prevState,
                        cep: data.cep || '',
                        logradouro: data.logradouro || '',
                        bairro: data.bairro || '',
                        cidade: data.localidade || '',
                        estado: data.uf || '',
                    }));
                    setValue('rua', data.logradouro || '');
                    setValue('bairro', data.bairro || '');
                    setValue('estado', data.uf || '');
                    setValue('cidade', data.localidade || '');
                    setFocus('numero');
                });
        }
        


    return (
        <>
            <GreenSection>
                <CadastroContainer>

                    <FormCadastroHeader>
                        <h2>Preencha com suas informações pessoais</h2>
                    </FormCadastroHeader>

                    <CadastroForm onSubmit={handleSubmit}>


                        <CadastroFieldset>
                            <FieldsetLegend>Dados Pessoais</FieldsetLegend>

                            <InputCadastroGroup>

                                <InputFlex>
                                    <InputCadastroBox>
                                        <label>Nome Completo</label>
                                        <input type="text" {...register('name')} placeholder='Nome Completo' onChange={handleChange} />
                                        <RedSpan>{errors.name?.message}</RedSpan>
                                    </InputCadastroBox>

                                    <InputCadastroBox>
                                        <label>CPF</label>
                                        <input type="text" {...register('cpf')} placeholder='000.000.000-00' onChange={handleChange} />
                                        <RedSpan>{errors.cpf?.message}</RedSpan>
                                    </InputCadastroBox>

                                </InputFlex>

                                <InputFlex>
                                    <InputCadastroBox>
                                        <label>Email</label>
                                        <input type="text" {...register('email')} placeholder='exemplo@email.com' onChange={handleChange} />
                                        <RedSpan>{errors.email?.message}</RedSpan>
                                    </InputCadastroBox>

                                    <InputCadastroBox>
                                        <label>Telefone</label>
                                        <input type="text" {...register('telefone')} placeholder='(99) 99999-9999' onChange={handleChange} />
                                        <RedSpan>{errors.cpf?.message}</RedSpan>
                                    </InputCadastroBox>

                                </InputFlex>


                                <InputFlex>
                                    <InputCadastroBox>
                                        <label>Usuário</label>
                                        <input type="text" {...register('username')} placeholder='Usuário' onChange={handleChange} />
                                        <RedSpan>{errors.email?.message}</RedSpan>
                                    </InputCadastroBox>

                                    <InputCadastroBox>
                                        <label>Senha</label>
                                        <input type="password" {...register('password')} placeholder='Senha' onChange={handleChange} />
                                        <RedSpan>{errors.cpf?.message}</RedSpan>
                                    </InputCadastroBox>

                                </InputFlex>

                            </InputCadastroGroup>

                        </CadastroFieldset>

                        <CadastroFieldset>

                            <FieldsetLegend>Dados Endereço</FieldsetLegend>

                            <InputCadastroGroup>

                                <InputFlex>

                                    <InputCadastroBox>
                                        <label>CEP</label>
                                        <input type="text" {...register('cep')} onBlur={buscarCep} placeholder='00000-000' onChange={handleChange} />
                                        <RedSpan>{errors.cep?.message}</RedSpan>
                                    </InputCadastroBox>

                                    <InputCadastroBox>
                                        <label>Rua</label>
                                        <input type="text" {...register('rua')} placeholder='Logradouro' onChange={handleChange} />
                                        <RedSpan>{errors.rua?.message}</RedSpan>
                                    </InputCadastroBox>

                                    <InputCadastroBox>
                                        <label>Número</label>
                                        <input type="text" {...register('numero')} placeholder='Número' onChange={handleChange} />
                                        <RedSpan>{errors.numero?.message}</RedSpan>
                                    </InputCadastroBox>

                                </InputFlex>

                                <InputFlex>

                                    <InputCadastroBox>
                                        <label>Bairro</label>
                                        <input type="text" {...register('bairro')} placeholder='Bairro' onChange={handleChange} />
                                        <RedSpan>{errors.bairro?.message}</RedSpan>
                                    </InputCadastroBox>

                                    <InputCadastroBox>
                                        <label>Cidade </label>
                                        <input type="text" {...register('cidade')} placeholder='Cidade' onChange={handleChange} />
                                        <RedSpan>{errors.cidade?.message}</RedSpan>
                                    </InputCadastroBox>

                                </InputFlex>

                            </InputCadastroGroup>

                            <SignUpButtonBox>
                                <SignInUpButton type="submit">Cadastrar</SignInUpButton>
                                <SignInUpButton type="reset">Limpar Campos</SignInUpButton>
                            </SignUpButtonBox>

                        </CadastroFieldset>

                    </CadastroForm>

                </CadastroContainer>
            </GreenSection>
        </>
    )
}

export default Cadastro