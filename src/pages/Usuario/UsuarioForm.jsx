import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import crud from '../../services/crud'
const api = crud('usuario')

export default function UsuarioForm(){
  const [form,setForm] = useState({ nome:'', dataNasc:'', genero:'', telefone:'', email:'', perfilFinanceiro:'', status:'', senha:'' })
  const nav = useNavigate(); const { id } = useParams()

  useEffect(()=>{ if(id) api.get(id).then(r=>setForm(r.data)).catch(e=>console.error(e)) },[id])

  const submit = async (e)=>{
    e.preventDefault()
    try{ if(id) await api.update(id, form); else await api.create(form); nav('/usuarios') }catch(e){ console.error(e); alert('Erro ao salvar') }
  }

  return (
    <div>
      <h2>{id ? 'Editar' : 'Novo'} Usuario</h2>
      <form onSubmit={submit}>
        <div className="form-row"><label>Nome: <input value={form.nome||''} onChange={e=>setForm({...form, nome:e.target.value})} required/></label></div>
        <div className="form-row"><label>Data Nasc: <input type="date" value={form.dataNasc||''} onChange={e=>setForm({...form, dataNasc: e.target.value})} /></label></div>
        <div className="form-row"><label>Genero: <input value={form.genero||''} onChange={e=>setForm({...form, genero:e.target.value})} /></label></div>
        <div className="form-row"><label>Telefone: <input value={form.telefone||''} onChange={e=>setForm({...form, telefone:e.target.value})} /></label></div>
        <div className="form-row"><label>Email: <input value={form.email||''} onChange={e=>setForm({...form, email:e.target.value})} required/></label></div>
        <div className="form-row"><label>Perfil Financeiro: <input value={form.perfilFinanceiro||''} onChange={e=>setForm({...form, perfilFinanceiro:e.target.value})} /></label></div>
        <div className="form-row"><label>Status: <input value={form.status||''} onChange={e=>setForm({...form, status:e.target.value})} /></label></div>
        <div className="form-row"><label>Senha: <input type="password" value={form.senha||''} onChange={e=>setForm({...form, senha:e.target.value})} /></label></div>
        <button className="btn btn-primary" type="submit">Salvar</button>
      </form>
    </div>
  )
}
