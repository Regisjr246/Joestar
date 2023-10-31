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

const CadastroServico = () => {
  const [nome, setNome] = useState<string>("");
  const [preco, setpreco] = useState<string>("");
  const [descricao, setdescricao] = useState<string>("");
  const [duracao, setduracao] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  const cadastrarServico = (e: FormEvent) => {
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
        window.location.href = "/ListagemServico";
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
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Cadastrar Serviços</h5>
              <form onSubmit={cadastrarServico} className="row g-3">
                <div className="col-6">
                  <label htmlFor="nome" className="form-label">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    className="form-control"
                    required
                    onChange={handleState}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="preco" className="form-label">
                    Preço
                  </label>
                  <input
                    type="number"
                    name="preco"
                    className="form-control"
                    required
                    onChange={handleState}
                  />
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
                    onChange={handleState}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="duracao" className="form-label">
                    Duracao
                  </label>
                  <input
                    type="time"
                    name="duracao"
                    className="form-control"
                    required
                    onChange={handleState}
                  />
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
    </div>
  );
};

export default CadastroServico;
