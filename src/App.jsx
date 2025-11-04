import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import DespesaList from './pages/Despesa/DespesaList'
import DespesaForm from './pages/Despesa/DespesaForm'
import ContaList from './pages/Conta/ContaList'
import ContaForm from './pages/Conta/ContaForm'
import UsuarioList from './pages/Usuario/UsuarioList'
import UsuarioForm from './pages/Usuario/UsuarioForm'

export default function App(){
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">Home</Link> | <Link to="/despesas">Despesas</Link> | <Link to="/contas">Contas</Link> | <Link to="/usuarios">Usuarios</Link> | <Link to="/login">Login</Link>
      </nav>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/despesas" element={<DespesaList/>} />
          <Route path="/despesas/novo" element={<DespesaForm/>} />
          <Route path="/despesas/editar/:id" element={<DespesaForm/>} />
          <Route path="/contas" element={<ContaList/>} />
          <Route path="/contas/novo" element={<ContaForm/>} />
          <Route path="/contas/editar/:id" element={<ContaForm/>} />
          <Route path="/usuarios" element={<UsuarioList/>} />
          <Route path="/usuarios/novo" element={<UsuarioForm/>} />
          <Route path="/usuarios/editar/:id" element={<UsuarioForm/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </div>
  )
}
