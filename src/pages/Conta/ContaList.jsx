import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import crud from '../../services/crud'
const api = crud('conta')

export default function ContaList(){
  const [items,setItems] = useState([])
  const load = async ()=>{
    try{ const res = await api.list(); setItems(res.data) }catch(e){ console.error(e); alert('Erro ao carregar contas') }
  }
  useEffect(()=>{ load() },[])
  const remove = async (id)=>{ if(!confirm('Remover?')) return; await api.remove(id); load() }
  return (
    <div>
      <h2>Contas</h2>
      <Link to="/contas/novo" className="btn btn-primary">Nova Conta</Link>
      <table className="table" style={{marginTop:10}}>
        <thead><tr><th>ID</th><th>Numero</th><th>Banco</th><th>Agencia</th><th>Tipo</th><th>Data Abertura</th><th>Ações</th></tr></thead>
        <tbody>
          {items && items.length>0 ? items.map(it=> (
            <tr key={it.idConta || it.id}>
              <td>{it.idConta || it.id}</td>
              <td>{it.numeroConta || it.nomeConta || it.idConta}</td>
              <td>{it.banco}</td>
              <td>{it.agencia}</td>
              <td>{it.tipoConta || it.tipo}</td>
              <td>{it.dataAbertura}</td>
              <td>
                <Link to={`/contas/editar/${it.idConta||it.id}`} className="btn">Editar</Link>
                <button className="btn btn-danger" onClick={()=>remove(it.idConta||it.id)}>Remover</button>
              </td>
            </tr>
          )) : <tr><td colSpan="7">Nenhuma conta</td></tr>}
        </tbody>
      </table>
    </div>
  )
}
