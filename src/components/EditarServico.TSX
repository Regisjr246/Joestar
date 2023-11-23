import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";

import styles from "../App.module.css";

import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditarServico = () => {

    const [nome, setNome] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [duracao, setDuracao] = useState<string>("");
    const [id, setId] = useState<number>();


    const parametro = useParams();

    const atualizar = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            id: id,
            nome: nome,
            preco: preco,
            descricao: descricao,
            duracao: duracao,

        }

        axios.put("http://127.0.0.1:8000/api/updateServico", dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                window.location.href = "/ListagemServico";
            }).catch(function (error) {
                console.log('Ocorreu um erro ao atualizar');
            });


    }


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/pesquisarPorIdServico/" + parametro.id);
                setNome(response.data.data.nome);
                setPreco(response.data.data.preco);
                setDescricao(response.data.data.descricao);
                setDuracao(response.data.data.duracao);
                setId(response.data.data.id);



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
    if (e.target.name === "preco") {
        setPreco(e.target.value);
    }
    if (e.target.name === "descricao") {
        setDescricao(e.target.value);
    }
    if (e.target.name === "duracao") {
        setDuracao(e.target.value);
    }
};


return (
    <div>


                

      <main className={styles.main}>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Cadastrar Serviços</h5>
              <form onSubmit={atualizar} className="row g-3">
                <div className="col-6" >
                <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState} value={nome} />
                </div>
                <div className="col-6">
                <label htmlFor="preco" className="form-label">
                                        Preço
                                    </label>
                                    <input
                                        type="decimal"
                                        name="preco"
                                        className="form-control"
                                        required
                                        onChange={handleState} value={preco}
                                    />
                </div>
                <div className="col-6">
                <label htmlFor="descricao" className="form-label">
                                        Descrição
                                    </label>
                                    <input
                                        type="text"
                                        name="descricao"
                                        className="form-control"
                                        required
                                        onChange={handleState} value={descricao}
                                    />
                </div>
                <div className="col-6">
                <label htmlFor="duracao" className="form-label">
                                        Duração(minutos)
                                    </label>
                                    <input
                                        type="text"
                                        name="duracao"
                                        className="form-control"
                                        required
                                        onChange={handleState} value={duracao}
                                    />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-success btn-sm">
                    Atualizar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};




export default EditarServico;