import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroClientes from "../components/CadastroClientes";
import CadastroProficional   from "../components/CadastrodeProfissionais";
import CadastroServico from "../components/CadastrodeServico";
import Listagem from "../components/Listagem";
import ListagemAgenda from "../components/ListagemAgenda";
import ListagemServico from "../components/ListagemServico";
import ListagemProficional from "../components/ListagemProfi";
import EditarCliente from "../components/EditarCliente";
import Editar from "../components/EditarCliente";
import EditarServico from "../components/EditarServico";
import RedefinirSenhaProfissionais from "../components/RedefinirSenhaProfissionais";
import RedefinirSenhaClientes from "../components/RedefinirSenhaClientes";
import CadastroAgenda   from "../components/CadastroAgenda";
import EditarProfissional from "../components/EditarProficional";
import EditarAgenda from "../components/EditarAgenda";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="CadastroDeClientes" element={<CadastroClientes />} />
                <Route path="CadastroDeProfissionais" element={<CadastroProficional/>} />
                <Route path="CadastroServico" element={<CadastroServico/>} />
                <Route path="CadastroAgenda" element={<CadastroAgenda/>} />
                <Route path="Listagem" element={<Listagem/>} />
                <Route path="ListagemServico" element={<ListagemServico/>} />4
                <Route path="ListagemAgenda" element={<ListagemAgenda/>} />
                <Route path="ListagemProficional" element={<ListagemProficional/>} />
                <Route path="/editarCliente/:id" element={<EditarCliente/>} />
                <Route path="/editarProfissional/:id" element={<EditarProfissional/>} />
                <Route path="/EditarAgenda/:id" element={<EditarAgenda/>} />
                <Route path="/editarServico/:id" element={<EditarServico/>} />
                <Route path="/redefinirSenhaClientes" element={<RedefinirSenhaClientes/>} />
                <Route path="/redefinirSenhaProfissionais" element={<RedefinirSenhaProfissionais/>} />

            </Routes>
        </BrowserRouter>
    );

}
export default AppRoute;

//ROTAS: CADASTROS
// cadastro de clientes: /CadastrodeClientes
// cadastro de proficional: /CadastrodeProfissionais
// cadastro de servico: /CadastroServico


//ROTAS: LISTAGENS
// listagem de clientes: /Listagem
// listagem de proficional: /ListagemProficional
// listagem de servico: /ListagemServico



