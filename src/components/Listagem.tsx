import axios from 'axios';
import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from "../App.module.css";
import { CadastroInterface } from '../Interfaces/CadastroClienteInterface';


const Listagem = () => {

    const [clientes, setClientes] = useState<CadastroInterface[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [error, setError] = useState("");




    function handleDelete(id: number) {
        const confirm = window.confirm('Você tem certeza que deseja excluir?');
        if (confirm)
            axios.delete('http://127.0.0.1:8000/api/excluir/' + id)
        
        .then(function(response){
           
            window.location.href = " /Listagem"
        }).catch(function(error){
            console.log('Ocorreu um erro ao excluir');
            console.log(error)
            Swal.fire({
                title: "Erro na exclusão",
                text: "Cliente não foi excluido ",
                icon: "error"
              });
        })
    }

    
        const handleState = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.name === "pesquisa") {
            setPesquisa(e.target.value);
        }
    }

//DELETANDO 

















//BuSCAR POR NOME
    const buscarNome = (e: FormEvent) => {
        e.preventDefault();

        async function fetchData() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/buscarNomecliente',
                    { nome: pesquisa },
                    {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }
                    }
                ).then(function (response) {
                    if(true == response.data.status){
                        setClientes(response.data.data)
                    } else {
                        setClientes([]);
                    
                    }
                }).catch(function (error) {
                    
                });

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/visualizarCadastroCliente');
                if(true == response.data.status){
                    setClientes(response.data.data)
                    
                }
            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);
                
            }
        }

        fetchData();
    }, []);

    
    return (
        <div>
            <main className={styles.main}>
                <div className='container'>

                    <div className='col-md mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>
                                    Pesquisar
                                </h5>
                                <form onSubmit={buscarNome}    className='row'>
                                    <div className='col-10'>
                                        <input type="text" name='pesquisa' className='form-control'
                                            onChange={handleState} />
                                    </div>

                                    

                                    
                                    <div className='col-1'>
                                        <button type='submit' className='btn btn-success'>Pesquisar</button>
                                        
                                    </div>

                                </form>




                                
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'> Listagem de Clientes</h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>E-mail</th>
                                        <th>celular</th>            
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientes.map(cliente => (
                                        <tr key={cliente.id}>
                                            <td>{cliente.id}</td>
                                            <td>{cliente.nome}</td>
                                            <td>{cliente.email}</td>
                                            <td>{cliente.cpf}</td>
                                          
                                            <td>{cliente.celular}</td>                                                                                                                                   
                                            <td>
                                                <Link to={"/editarCliente/" + cliente.id} className='btn btn-primary btn-sm'>Editar</Link>
                                                <a onClick={e => handleDelete(cliente.id)} className='btn btn-danger btn-sm' >Excluir</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}
export default Listagem;