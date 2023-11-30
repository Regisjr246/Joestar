import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';

import styles from '../App.module.css'
//footer
//header
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Header';
import Footer from './Footer';
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

const CadastroCliente = () => {

    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [localidade, setLocalidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [nomeErro, setNomeErro] = useState<string>("");
    const [celularErro, setCelularErro] = useState<string>("");
    const [emailErro, setEmailErro] = useState<string>("");
    const [cpfErro, setCpfErro] = useState<string>("");
    const [dataNascimentoErro, setDataNascimentoErro] = useState<string>("");
    const [localidadeErro, setLocalidadeErro] = useState<string>("");
    const [estadoErro, setEstadoErro] = useState<string>("");
    const [paisErro, setPaisErro] = useState<string>("");
    const [ruaErro, setRuaErro] = useState<string>("");
    const [numeroErro, setNumeroErro] = useState<string>("");
    const [bairroErro, setBairroErro] = useState<string>("");
    const [cepErro, setCepErro] = useState<string>("");
    const [complementoErro, setComplementoErro] = useState<string>("");
    







    const cadastrarCliente = (e: FormEvent) => {
       
       
    setNomeErro("")
    setCelularErro("")
    setEmailErro("")
    setCpfErro("")
    setDataNascimentoErro("")
    setLocalidadeErro("")
    setEstadoErro("")
    setPaisErro("")
    setRuaErro("")
    setNumeroErro("")
    setBairroErro("")
    setCepErro("")
    setComplementoErro("")
       
        e.preventDefault();


        const dados = {
            nome: nome,
            email: email,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cidade: localidade,
            estado: estado,
            celular: celular,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            password: password

        }

        axios.post('http://127.0.0.1:8000/api/cadastroCliente',
            dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }
        ).then(function (response) {





            if (response.data.success == false) {


                // nome
                if ('nome' in response.data.error) {
                    setNomeErro(response.data.error.nome[0])
                }


                //email
                if ('email' in response.data.error) {
                    setEmailErro(response.data.error.email[0])
                }

                

                //cpf
                if ('cpf' in response.data.error) {
                    setCpfErro(response.data.error.cpf[0])
                }

                //BAIRRO
                if ('bairro' in response.data.error) {
                    setBairroErro(response.data.error.bairro[0])
                }


                //NUEMRO
                if ('numero' in response.data.error) {
                    setNumeroErro(response.data.error.numero[0])
                }

                //CIDADE
                if ('cidade' in response.data.error) {
                    setLocalidadeErro(response.data.error.cidade[0])
                }

                //ESTADO
                if ('estado' in response.data.error) {
                    setEstadoErro(response.data.error.estado[0])
                }


                //celular
                if ('celular' in response.data.error) {
                    setCelularErro(response.data.error.celular[0])
                }


                //pais
                if ('pais' in response.data.error) {
                    setPaisErro(response.data.error.pais[0])
                }

                //complemento
                if ('complemento' in response.data.error) {
                    setComplementoErro(response.data.error.complemento[0])
                }

                //CEP
                if ('cep' in response.data.error) {
                    setCepErro(response.data.error.cep[0])
                }

                   //rua
                if ('rua' in response.data.error) {
                    setRuaErro(response.data.error.rua[0])
                }


//rua
                if ('dataNasciemnto' in response.data.error) {
                    setDataNascimentoErro(response.data.error.dataNasciemento[0])
                }


            } else {


                alert('cadastro realizado com sucesso')


                window.location.href = "/listagem"
            }
        }).catch(function (error) {
            console.log(error)
            Swal.fire({
                title: "Erro no Cadastro",
                text: "Cliente não cadastrado ",
                icon: "error"
            });
        });
    }










    const findCep = (e: FormEvent) => {









        e.preventDefault();

        fetch('https://viacep.com.br/ws/' + cep + '/json/',
            {
                method: 'GET'
            }
        ).then(response => response.json())
            .then(
                data => {
                    console.log(data);

                    setLocalidade(data.localidade);

                    //setPais(data.pais);

                    setEstado(data.uf);


                }
            )


    }
    const submitForm = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name = "cep") {
            setCep(e.target.value);
        }

    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "cpf") {

            setCpf(e.target.value);

        }
        if (e.target.name === "dataNascimento") {
            setDataNascimento(e.target.value);
        }
        if (e.target.name === "localidade") {
            setLocalidade(e.target.value);
        }
        if (e.target.name === "estado") {
            setEstado(e.target.value);
        }
        if (e.target.name === "celular") {
            setCelular(e.target.value);
        }
        if (e.target.name === "pais") {
            setPais(e.target.value);
        }
        if (e.target.name === "rua") {
            setRua(e.target.value);
        }
        if (e.target.name === "numero") {
            setNumero(e.target.value);
        }
        if (e.target.name === "bairro") {
            setBairro(e.target.value);
        }
        if (e.target.name === "cep") {
            setCep(e.target.value);
        }
        if (e.target.name === "complemento") {
            setComplemento(e.target.value);
        }
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }
    return (
        <div>



            <Header />
            <main className={styles.main}>
                <div className='container'>

                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Clientes</h5>
                            <form onSubmit={cadastrarCliente} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState} placeholder='ex: Torss' />
                                    <div
                                        className='text-danger'>{nomeErro}
                                    </div>
                                </div>

                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label' >E-mail</label>
                                    <input type="email" name='email' className='form-control' required onChange={handleState} placeholder='ex: xxxx@gmail.com' />
                                    <div
                                        className='text-danger'>{emailErro}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="text" name='cpf' className='form-control' required onChange={handleState} placeholder='ex: 11111111111' />
                                    <div
                                        className='text-danger'>{cpfErro}
                                    </div>                              
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="cpf" className='form-label'>Data de Nascimento</label>
                                    <input type="date" name='dataNascimento' className='form-control' required onChange={handleState} />
                                    <div
                                        className='text-danger'>{dataNascimentoErro}
                                    </div> 
                                </div>


                                <div className='col-4'>
                                    <label htmlFor="cep" className='form-label'>Cep</label>
                                    <input type="text" name='cep' className='form-control' required onBlur={findCep} onChange={handleState} placeholder='Só  numeros' />
                                    <div
                                        className='text-danger'>{cepErro}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="estado" className='form-label'>Estado</label>
                                    <input type="text" name='estado' value={estado} className='form-control' required onChange={handleState} placeholder='ex:SP' />
                                    <div
                                        className='text-danger'>{estadoErro}
                                    </div>
                                </div>

                                <div className='col-4'>
                                    <label htmlFor="cidade" className='form-label'>Cidade</label>
                                    <input type="text" value={localidade} id='localidade' name='localidade' className='form-control' required onChange={handleState} placeholder='Presidente Prudente' />
                                    <div
                                        className='text-danger'>{localidadeErro}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="celular" className='form-label'>Celular</label>
                                    <input type="text" name='celular' className='form-control' required onChange={handleState} placeholder='ex: Apenas 11 numeros' />
                                    <div
                                        className='text-danger'>{celularErro}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="celular" className='form-label'>Pais</label>
                                    <input type="text" value={pais} name='pais' id='pais' className='form-control' required onChange={handleState} placeholder='ex: Brasil' />
                                    <div
                                        className='text-danger'>{paisErro}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="rua" className='form-label'>Rua</label>
                                    <input type="text" name='rua' className='form-control' required onChange={handleState} placeholder='ex: Joao dragon' />
                                    <div
                                        className='text-danger'>{ruaErro}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="numero" className='form-label'>Numero</label>
                                    <input type="text" name='numero' className='form-control' required onChange={handleState} placeholder='ex: Apenas 11 numeros' />
                                    <div
                                        className='text-danger'>{numeroErro}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="bairro" className='form-label'>Bairro</label>
                                    <input type="text" name='bairro' className='form-control' required onChange={handleState} placeholder='ex: renascer' />
                                    <div
                                        className='text-danger'>{bairroErro}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="complemento" className='form-label'>Complemento</label>
                                    <input type="text" name='complemento' className='form-control' required onChange={handleState} placeholder='ex: Quinta rua' />
                                    <div
                                        className='text-danger'>{complementoErro}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="password" className='form-label'>Senha</label>
                                    <input type="password" name='password' className='form-control' required onChange={handleState} placeholder='numeros, caracteres,simbolos' />
                                    
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm' >Cadastrar</button >
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default CadastroCliente;