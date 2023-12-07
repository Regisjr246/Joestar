import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';

import styles from '../App.module.css'
//footer
//header
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Header';
import Footer from './Footer';
import { CadastroInterfaceProficional } from '../Interfaces/CadastroProfissionalInterface';
import { Interface } from 'readline';


<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>




const CadastroAgenda = () => {

    const [profissional_id, setPrficional_id] = useState<string>("");
    const [dataHora, setDataHora] = useState<string>("");
    const [profissional, setProfissional] = useState<CadastroInterfaceProficional[]>([]);





    const [profissional_idErro, setprofissional_idErro] = useState<string>("")
    const [dataHoraErro, setDataHoraErro] = useState<string>("")
    const [profissioanlErro, setProfissioanlErro] = useState<string>("")
   






    

    const cadastrarAgenda = (e: FormEvent) => {
        setprofissional_idErro("")
        setDataHoraErro("")
        setProfissioanlErro("")

        e.preventDefault();


        const dados = {
            profissional_id: profissional_id,
            dataHora: dataHora,
        }
        if (new Date(dataHora) < new Date()) {
            setDataHoraErro("Não é possível cadastrar antes da data e hora atual");
            return;
          }


          axios
          .post("http://127.0.0.1:8000/api/cadastroAgenda", dados, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then(function (response) {
            alert("Cadastro de Agenda realizado com sucesso");
            window.location.href = "/ListagemAgenda";
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire({
              title: "Erro no Cadastro",
              text: "Agenda não cadastrada",
              icon: "error",
            });
          });
      };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/visualizarProfissional');
                if (true == response.data.status) {
                    setProfissional(response.data.data)
                    console.log(profissional);
                }
            } catch (error) {
                console.log(error);
              
            }
        }

        fetchData();
    }, []);

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "dataHora") {
            setDataHora(e.target.value);
        }
    }

    const handleProfissionalSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setPrficional_id(e.target.value);
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>

                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar horario disponiveis </h5>
                            <form onSubmit={cadastrarAgenda} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Profcional_Id</label>
                                    <select name='profissional_id' id='profissional_id ' className='form-control' required onChange={handleProfissionalSelect}   >
                                        <option value="0">Selecione um Profissional</option>
                                        {profissional.map(profissional => (
                                            <option key={profissional.id} value={profissional.id}>
                                                {profissional.nome}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label' >Data e hora</label>
                                    <input type="datetime-local" name='dataHora' className='form-control' required onChange={handleState}    /> 
                               <div
                                        className='text-danger'>{dataHoraErro}
                                    </div>

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

export default CadastroAgenda;