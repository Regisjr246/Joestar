import React, { Component, useState, ChangeEvent, FormEvent, useEffect} from 'react';

import styles from '../template.module.css';
import Header from './Header';
import Footer from "./Footer";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CadastroInterfaceProficional } from '../Interfaces/CadastroProfissionalInterface';


const EditarAgenda = () => {

    


    const [profissional_id, setProfissional_id] = useState<string>("");
    const [dataHora, setDataHora] = useState<string>("");
    const [id, setId] = useState<number>();
 
    const [profissional_idErro, setProfissional_idErro] = useState<string>("");
    const [dataHoraErro, setDataHoraErro] = useState<string>("");
    const [idErro, setIdErro] = useState<number>();



    const parametro = useParams();
    const atualizarAgenda = (e: FormEvent) => {
        e.preventDefault();


        

        const dados = {
            id: id,
            profissional_id: profissional_id,
            dataHora: dataHora,
        }
        
        axios.put("http://127.0.0.1:8000/api/update/agendamento",dados,{
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(function(response){
            window.location.href = "/ListagemAgenda";
        }).catch(function(error){
            console.log('ocorreu um erro ao atualizar');
        });
    }

    useEffect(() => {
      async function fetchData() {
        try{
            const response = await axios.get("http://127.0.0.1:8000/api/find/agendamento/"+parametro.id);
            setProfissional_id(response.data.data.profissional_id);
            setDataHora(response.data.data.dataHora);
            setId(response.data.data.id);
        } catch(error){
            console.log("erro ao buscar dados da api");
        }
      }
      fetchData();
    }, []);

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "profissional_id") { setProfissional_id(e.target.value); }
        if (e.target.name === "dataHora") { setDataHora(e.target.value); }
    }

    return (
        <div><Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Editar horario disponiveis</h5>
                            <form onSubmit={atualizarAgenda} className='row g-3'>
                             

                                <div className='col-6'>
                                <label htmlFor="profissional_id" className='form label'>profissional_id</label>
                                    <input type="text" name='profissional_id' className='form-control'  
                                    required onChange={handleState} value={profissional_id} />
                                </div>

                                

                                <div className='col-6'>
                                <label htmlFor="dataHora" className="form-label">Data e hora</label>
                                    <input type="datetime-local" name="dataHora" className="form-control"  
                                    required onChange={handleState} value={dataHora} />
                                </div>



                                
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-success btn-sm'>Atualizar</button>
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
export default EditarAgenda;