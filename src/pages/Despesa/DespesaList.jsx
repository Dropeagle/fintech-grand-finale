import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import crud from '../../services/crud'

const api = crud('despesa')

export default function DespesaList(){
  const [items,setItems] = useState([])
  const load = async ()=>{
    try{
      const res = await api.list()
      setItems(res.data)
    }catch(e){ console.error(e); alert('Erro ao carregar despesas') }
  }
  useEffect(()=>{ load() },[])
  const remove = async (id)=>{
    if(!confirm('Remover?')) return
    await api.remove(id)
    load()
  }
  return (
    <div>
      <h2>Despesas</h2>
      <Link to="/despesas/novo" className="btn btn-primary">Nova Despesa</Link>
      <table className="table" style={{marginTop:10}}>
        <thead><tr><th>ID</th><th>Nome</th><th>Tipo</th><th>Valor</th><th>Data</th><th>Conta</th><th>Ações</th></tr></thead>
        <tbody>
          {items && items.length>0 ? items.map(it=>(
            <tr key={it.idDespesa || it.id}>
              <td>{it.idDespesa || it.id}</td>
              <td>{it.nomeDespesa || it.nome}</td>
              <td>{it.tipoDespesa || it.tipo}</td>
              <td>{it.valor}</td>
              <td>{it.dataGasto || it.data}</td>
              <td>{it.conta ? (it.conta.numeroConta || it.conta.idConta) : ''}</td>
              <td>
                <Link to={`/despesas/editar/${it.idDespesa||it.id}`} className="btn">Editar</Link>
                <button className="btn btn-danger" onClick={()=>remove(it.idDespesa||it.id)}>Remover</button>
              </td>
            </tr>
          )) : <tr><td colSpan="7">Nenhuma despesa</td></tr>}
        </tbody>
      </table>
    </div>
  )
}
