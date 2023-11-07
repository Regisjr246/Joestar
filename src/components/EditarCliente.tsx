import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";

import style from '../template.module.css'
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from '../App.module.css'
const EditarClientes = () => {

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [id, setId] = useState<number>();
    const [dataNascimento, setDataNascimento] = useState<string>("")
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const [celular, setCelular] = useState<string>("");

    const parametro = useParams();

    const atualizar = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            id: id,
            nome: nome,
            email: email,
            cpf: cpf,
            dataNascimento:dataNascimento,
            cep: cep,
            complemento: complemento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            celular: celular

        }

        axios.put("http://127.0.0.1:8000/api/updateCliente", dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                window.location.href = "/listagem";
            }).catch(function (error) {
                console.log('Ocorreu um erro ao atualizar');
            });


    }


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/pesquisarPorIdCleinte/" + parametro.id);
                setNome(response.data.data.nome);
                setEmail(response.data.data.email);
                setCpf(response.data.data.cpf);
                setId(response.data.data.id);
                setDataNascimento(response.data.data.dataNascimento);
                setCep(response.data.data.cep);
                setComplemento(response.data.data.complemento);
                setCidade(response.data.data.cidade);
                setEstado(response.data.data.estado);
                setPais(response.data.data.pais);
                setRua(response.data.data.rua);
                setNumero(response.data.data.numero);
                setBairro(response.data.data.bairro);
                setCelular(response.data.data.celular);

            } catch (error) {
                console.log("Erro ao buscar dados da api");

            }

        }
        fetchData();

    }, []);


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
        if (e.target.name === "dataDeNascimento") {
            setDataNascimento(e.target.value);
        }
        if (e.target.name == "cep") {
            setCep(e.target.value);
        }
        if (e.target.name == "complemento") {
            setComplemento(e.target.value);
        }
        if (e.target.name === "celular") {
            setCelular(e.target.value);
        } 
        if (e.target.name == "cidade") {
            setCidade(e.target.value);
        }
        if (e.target.name == "estado") {
            setEstado(e.target.value);
        }
        if (e.target.name == "pais") {
            setPais(e.target.value);
        }
        if (e.target.name == "rua") {
            setRua(e.target.value);
        }
        if (e.target.name == "numero") {
            setNumero(e.target.value);
        }
        if (e.target.name == "bairro") {
            setBairro(e.target.value);
        }
        if (e.target.name == "cep") {
            setCep(e.target.value);
        }
    }

    return (
        <div>
              
              <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> JOESTARS BEAUTY</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Pagina Inicial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Serviços</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Localização
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Contato</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<main className={styles.main}>
  <main>
  <div>
    <div>
                <div className='container'>
                    
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Atualizar Cliente</h5>
                            <form onSubmit={atualizar} className='row g-3'>
                                <div className='col-6'>
                                <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState} value={nome} />
                                </div>
                                <div className='col-6'>
                                <label htmlFor="email" className='form-label'>E-mail</label>
                                    <input type="text" name='email' className='form-control' required onChange={handleState} value={email} />
                                </div>
                                <div className='col-4'>
                                <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="text" name='cpf' className='form-control' required onChange={handleState} value={cpf} />
                                </div>
                                <div className='col-4'>
                                <label htmlFor="dataDeNascimento" className='form-label'>Data de nascimento</label>
                                    <input type="date" name='dataDeNascimento' className='form-control' required onChange={handleState} value={dataNascimento} />
                                </div>


                                <div className='col-4'>
                                <label htmlFor="cep" className='form-label'>CEP</label>
                                    <input type="text" name='cep' className='form-control' required onChange={handleState} value={cep} />
                                </div>
                                <div className='col-4'>
                                <label htmlFor="estado" className='form-label'>Estado</label>
                                </div>

                                <div className='col-4'>
                                <label htmlFor="cidade" className='form-label'>Cidade</label>
                                    <input type="text" name='cidade' className='form-control' required onChange={handleState} value={cidade} />
                                </div>
                                </div>
                                <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Celular</label>
                                    <input type="text" name='celular' className='form-control' required onChange={handleState}value={celular}  /> </div>
                                <div className='col-4'>
                                <label htmlFor="pais" className='form-label'>País</label>
                                </div>
                                <div className='col-4'>
                                <label htmlFor="rua" className='form-label'>Rua</label>
                                    <input type="text" name='rua' className='form-control' required onChange={handleState}value={rua} />
                                </div>
                                <div className='col-4'>
                                <label htmlFor="numero" className='form-label'>Numero</label>
                                    <input type="text" name='numero' className='form-control' required onChange={handleState} value={numero} />
                                </div>
                                <div className='col-4'>
                                <label htmlFor="bairro" className='form-label'>Bairro</label>
                                    <input type="text" name='bairro' className='form-control' required onChange={handleState} value={bairro} />
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="complemento" className='form-label'>Complemento</label>
                                    <input type="text" name='complemento' className='form-control' required onChange={handleState} placeholder='ex: Quinta rua'/>
                                </div>
                                <div className='col-4'>
                                    <label htmlFor="password" className='form-label'>Senha</label>
                                    <input type="password" name='password' className='form-control' required onChange={handleState} placeholder='numeros, caracteres,simbolos' />
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm' >Atualizar</button >
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

        </div>
}
export default EditarClientes;