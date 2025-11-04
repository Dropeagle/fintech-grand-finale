import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import crud from '../../services/crud'
const api = crud('conta')
const usuarioApi = crud('usuario')

export default function ContaForm(){
  const [form,setForm] = useState({ numeroConta:'', tipoConta:'', banco:'', agencia:'', dataAbertura:'', usuario: { idUsuario: null } })
  const nav = useNavigate(); const { id } = useParams()
  const [usuarios, setUsuarios] = useState([])

  useEffect(()=>{ 
    usuarioApi.list().then(r=> setUsuarios(r.data)).catch(()=>{})
    if(id) api.get(id).then(r=> setForm(r.data)).catch(e=>console.error(e))
  },[id])

  const submit = async (e)=>{
    e.preventDefault()
    try{ 
      const payload = {...form, usuario: form.usuario && form.usuario.idUsuario ? { idUsuario: Number(form.usuario.idUsuario) } : null }
      if(id) await api.update(id, payload); else await api.create(payload); nav('/contas') 
    }catch(e){ console.error(e); alert('Erro ao salvar') }
  }

  return (
    <div>
      <h2>{id ? 'Editar' : 'Nova'} Conta</h2>
      <form onSubmit={submit}>
        <div className="form-row"><label>Numero: <input value={form.numeroConta||''} onChange={e=>setForm({...form, numeroConta:e.target.value})} required/></label></div>
        <div className="form-row"><label>Tipo: <input value={form.tipoConta||''} onChange={e=>setForm({...form, tipoConta:e.target.value})} /></label></div>
        <div className="form-row"><label>Banco: <input value={form.banco||''} onChange={e=>setForm({...form, banco:e.target.value})} /></label></div>
        <div className="form-row"><label>Agencia: <input value={form.agencia||''} onChange={e=>setForm({...form, agencia:e.target.value})} /></label></div>
        <div className="form-row"><label>Data Abertura: <input type="date" value={form.dataAbertura||''} onChange={e=>setForm({...form, dataAbertura: e.target.value})} /></label></div>
        <div className="form-row">
          <label>Usuario:
            <select value={form.usuario?.idUsuario || ''} onChange={e=>setForm({...form, usuario: { idUsuario: e.target.value } })}>
              <option value="">-- selecione --</option>
              {usuarios.map(u=> <option key={u.idUsuario} value={u.idUsuario}>{u.nome || u.nomeUsuario || u.idUsuario}</option>)}
            </select>
          </label>
        </div>
        <button className="btn btn-primary" type="submit">Salvar</button>
      </form>
    </div>
  )
}
