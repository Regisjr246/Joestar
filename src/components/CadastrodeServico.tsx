import React, {
  Component,
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import axios from "axios";
import Header from "./Header";
import styles from "../App.module.css";
import Footer from "./Footer";

const CadastroServico = () => {
  const [nome, setNome] = useState<string>("");
  const [preco, setpreco] = useState<string>("");
  const [descricao, setdescricao] = useState<string>("");
  const [duracao, setduracao] = useState<string>("");
  const [erro, setErro] = useState<string>("");



  const [nomeErro, setNomeErro] = useState<string>("");
  const [precoErro, setprecoErro] = useState<string>("");
  const [descricaoErro, setdescricaoErro] = useState<string>("");
  const [duracaoErro, setduracaoErro] = useState<string>("");



  const cadastrarServico = (e: FormEvent) => {
    setNomeErro("")
    setprecoErro("")
    setduracaoErro("")
    setdescricaoErro("")

    e.preventDefault();
    const dados = {
      nome: nome,
      preco: preco,
      descricao: descricao,
      duracao: duracao,
    };

    console.log(dados);
    axios
      .post("http://127.0.0.1:8000/api/cadastrarServico", dados, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {




        if (response.data.success == false) {


          // nome
          if ('nome' in response.data.error) {
            setNomeErro(response.data.error.nome[0])
          }


          //email
          if ('descricao' in response.data.error) {
            setdescricaoErro(response.data.error.descricao[0])
          }



          //cpf
          if ('duracao' in response.data.error) {
            setduracaoErro(response.data.error.duracao[0])
          }

          //BAIRRO
          if ('preco' in response.data.error) {
            setprecoErro(response.data.error.preco[0])
          }


        } else {
          window.location.href = "/ListagemServico";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleState = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "nome") {
      setNome(e.target.value);
    }
    if (e.target.name === "preco") {
      setpreco(e.target.value);
    }
    if (e.target.name === "descricao") {
      setdescricao(e.target.value);
    }
    if (e.target.name === "duracao") {
      setduracao(e.target.value);
    }
  };

  return (
    <div>



      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Cadastrar Serviços</h5>
              <form onSubmit={cadastrarServico} className="row g-3">
                <div className="col-6" >
                  <label htmlFor="nome" className="form-label" >
                    Nome
                  </label >
                  <input
                    type="text"
                    name="nome"
                    className="form-control"
                    required
                    onChange={handleState} placeholder="ex: Corte Americano"
                  /><div
                    className='text-danger'>{nomeErro}
                  </div>
                </div>
                <div className="col-6">
                  <label htmlFor="preco" className="form-label" >
                    Preço
                  </label>
                  <input
                    type="decimal"
                    name="preco"
                    className="form-control"
                    required
                    onChange={handleState} placeholder="ex: 20.00"

                  /><div
                    className='text-danger'>{precoErro}
                  </div>
                </div>
                <div className="col-6">
                  <label htmlFor="descricao" className="form-label">
                    Descricao
                  </label>
                  <input
                    type="text"
                    name="descricao"
                    className="form-control"
                    required
                    onChange={handleState} placeholder="ex: Corte ultilizando.. "
                  /><div
                    className='text-danger'>{descricaoErro}
                  </div>
                </div>
                <div className="col-6">
                  <label htmlFor="duracao" className="form-label">
                    Duracao(minutos)
                  </label>
                  <input
                    type="number"
                    name="duracao"
                    className="form-control"
                    required
                    onChange={handleState} placeholder="ex:30"
                  /><div
                    className='text-danger'>{duracaoErro}
                  </div>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-success btn-sm">
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CadastroServico;
