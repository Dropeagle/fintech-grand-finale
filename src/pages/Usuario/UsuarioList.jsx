import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import crud from '../../services/crud'
const api = crud('usuario')

export default function UsuarioList(){
  const [items,setItems] = useState([])
  const load = async ()=>{ try{ const res = await api.list(); setItems(res.data) }catch(e){ console.error(e); alert('Erro ao carregar usuarios') } }
  useEffect(()=>{ load() },[])
  const remove = async (id)=>{ if(!confirm('Remover?')) return; await api.remove(id); load() }
  return (
    <div>
      <h2>Usuarios</h2>
      <Link to="/usuarios/novo" className="btn btn-primary">Novo Usuario</Link>
      <table className="table" style={{marginTop:10}}>
        <thead><tr><th>ID</th><th>Nome</th><th>Email</th><th>Ações</th></tr></thead>
        <tbody>
          {items && items.length>0 ? items.map(it=> (
            <tr key={it.idUsuario || it.id}>
              <td>{it.idUsuario || it.id}</td>
              <td>{it.nome || it.nomeUsuario || ''}</td>
              <td>{it.email}</td>
              <td>
                <Link to={`/usuarios/editar/${it.idUsuario||it.id}`} className="btn">Editar</Link>
                <button className="btn btn-danger" onClick={()=>remove(it.idUsuario||it.id)}>Remover</button>
              </td>
            </tr>
          )) : <tr><td colSpan="4">Nenhum usuario</td></tr>}
        </tbody>
      </table>
    </div>
  )
}
