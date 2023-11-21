import axios from 'axios';
import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Swal from 'sweetalert2';
import styles from "../App.module.css";
import { CadastroInterfaceProficional } from '../Interfaces/CadastroProfissionalInterface';
import { Link } from 'react-router-dom';


const ListagemProficional = () => {

    const [profissional, setProfissional] = useState<CadastroInterfaceProficional[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [error, setError] = useState("");


        const handleState = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.name === "pesquisa") {
            setPesquisa(e.target.value);
        }
    }

//deletando

function handleDelete(id: number) {
    const confirm = window.confirm('Você tem certeza que deseja excluir?');
    if (confirm)
        axios.delete('http://127.0.0.1:8000/api/deletarProficional/' + id)
    
    .then(function(response){
       
        window.location.href = " /ListagemProficional"
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







    //Buscar por nome
    const buscar = (e: FormEvent) => {
        e.preventDefault();

        async function fetchData() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/pesquisarPorProfissional',
                    { nome: pesquisa },
                    {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }
                    }
                ).then(function (response) {
                    if(true == response.data.status){
                        setProfissional(response.data.data)
                    } else {
                        setProfissional([]);
                    }
                }).catch(function (error) {
                    console.log(error)
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
                const response = await axios.get('http://127.0.0.1:8000/api/vizualizarProfi');
                if(true == response.data.status){
                    setProfissional(response.data.data)
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
                                <form onSubmit={buscar} className='row'>
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
                            <h5 className='card-title'> Listagem de Proficional</h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                     
                                        <th>E-mail</th>
                                        <th>CPF</th>
                                     
                                       
                                        <th>celular</th>
                                      
                                        <th>salario</th>
                                        
                                        
                                        
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {profissional.map(profissional => (
                                        <tr key={profissional.id}>
                                            <td>{profissional.id}</td>
                                            <td>{profissional.nome}</td>
                                            <td>{profissional.email}</td>
                                            <td>{profissional.cpf}</td>
                                            <td>{profissional.celular}</td>                                           
                                            <td>{profissional.salario}</td>
                                            
                                            
                                            <td>
                                            <Link to={"/EditarProfissional/" + profissional.id} className='btn btn-primary btn-sm'>Editar</Link>
                                            <a onClick={e => handleDelete(profissional.id)} className='btn  m-1 btn-danger btn-sm' >Excluir</a>
                                            <Link to={"/RedefinirSenhaProfissionais/"} className='btn btn-primary btn-sm'>Redefinir senha</Link>
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
export default ListagemProficional;