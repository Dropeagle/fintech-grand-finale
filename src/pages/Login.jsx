import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

export default function Login(){
  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    try{
      await api.post('/usuario/login', { email, senha })
      nav('/')
    }catch(err){
      try{
        await api.post('/login', { email, senha })
        nav('/')
      }catch(e){
        alert('Falha no login. Verifique credenciais.')
      }
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div className="form-row"><label>Email: <input value={email} onChange={e=>setEmail(e.target.value)} required/></label></div>
        <div className="form-row"><label>Senha: <input type="password" value={senha} onChange={e=>setSenha(e.target.value)} required/></label></div>
        <button className="btn btn-primary" type="submit">Entrar</button>
      </form>
    </div>
  )
}
