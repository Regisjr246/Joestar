import axios from 'axios';
import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Swal from 'sweetalert2';
import styles from "../App.module.css";
import { CadastroInterfaceServico } from '../Interfaces/CadastroServicos';
import { Link } from 'react-router-dom';


const ListagemServico = () => {

    const [servico, setServico] = useState<CadastroInterfaceServico[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    const [error, setError] = useState("");








//deletando

function handleDelete(id: number) {
    const confirm = window.confirm('Você tem certeza que deseja excluir?');
    if (confirm)
        axios.delete('http://127.0.0.1:8000/api/delete/' + id)
    
    .then(function(response){
       
        window.location.href = " /ListagemServico"
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


    const buscar = (e: FormEvent) => {
        e.preventDefault();

        async function fetchData() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/buscarNome',
                    { nome: pesquisa },
                    {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }
                    }
                ).then(function (response) {
                    if(true == response.data.status){
                        setServico(response.data.data)
                    } else {
                        setServico([]);
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
                const response = await axios.get('http://127.0.0.1:8000/api/visualizarServico');
                if(true == response.data.status){
                    setServico(response.data.data)
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
                            <h5 className='card-title'> Listagem de Serviços</h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Preco</th>
                                        <th>Duracao</th>
                                        <th>descricao</th>
                               
                                        
                                        
                                        
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servico.map(servico => (
                                        <tr key={servico.id}>
                                            <td>{servico.id}</td>
                                            <td>{servico.nome}</td>
                                            <td>{servico.preco}</td>
                                            <td>{servico.descricao}</td>
                                            <td>{servico.duracao}</td>
                                           
                                          
                                            
                                            
                                            <td>
                                            <Link to={"/EditarServico/" +servico.id} className='btn btn-primary btn-sm'>Editar</Link>
                                            <a onClick={e => handleDelete(servico.id)} className='btn btn-danger btn-sm' >Excluir</a>
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
export default ListagemServico;