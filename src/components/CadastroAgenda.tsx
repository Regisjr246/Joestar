import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';

import styles from '../App.module.css'
//footer
//header
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Header';
import Footer from './Footer';
import { CadastroInterfaceProficional } from '../Interfaces/CadastroProfissionalInterface';
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

const CadastroCliente = () => {

    const [proficional_id, setPrficional_id] = useState<string>("");
    const [dataHora, setDataHora] = useState<string>("");
    const [proficional, setProficional] = useState<CadastroInterfaceProficional[]>([]);

    const cadastrarAgenda = (e: FormEvent) => {
        e.preventDefault();


        const dados = {
            proficional_id: proficional_id,
            dataHora: dataHora,
            

        }
console.log(dados)
        axios.post('http://127.0.0.1:8000/api/cadastroAgenda',
            dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }
        ).then(function (response) {
            
            alert('cadastro Agenda realizado com sucesso')
         //   Swal.fire({
           //     title: "Cadastrado?",
             //   text: "Cliente cadastrado com sucesso",
             //   icon: "success"
             // });

            window.location.href = "/ListagemAgenda"
        }).catch(function (error) {
            console.log(error)
            Swal.fire({
                title: "Erro no Cadastro",
                text: "Agenda não cadastrado ",
                icon: "error"
              });
        });
    }







    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/visualizarAgenda');
                if(true == response.data.status){
                    setProficional(response.data.data)
                    console.log(proficional);
                }
            } catch (error) {
                console.log(error);
                Swal.fire({
                    title: "Ocorreu um erro",
                    text: "XXXXXXXXXXXXXXXX ",
                    icon: "error"
                  });
            }
        }

        fetchData();
    }, []);








    





    
    

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "Prficional_id") {
            setPrficional_id(e.target.value);
        }
        if (e.target.name === "data_hora") {
            setDataHora(e.target.value);
        }
       
    }
    return (
        <div>
          <Header/>
<main className={styles.main}>
                <div className='container'>
                    
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Clientes</h5>
                            <form onSubmit={cadastrarAgenda} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Profcional_Id</label>
                                    <select name="select"   className='form-control' required    >
                                      <option value="valor1"></option>
</select>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label' >Data e hora</label>
                                    <input type="datetime-local" name='data_hora' className='form-control' required onChange={handleState}  />

                                </div>
                               
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm' >Cadastrar</button >
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>

    )
}

export default CadastroCliente;