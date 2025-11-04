import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import crud from '../../services/crud'
const api = crud('despesa')
const contaApi = crud('conta')

export default function DespesaForm(){
  const [form,setForm] = useState({ nomeDespesa:'', tipoDespesa:'', valor:0, dataGasto:'', conta: { idConta: null } })
  const nav = useNavigate()
  const { id } = useParams()
  const [contas, setContas] = useState([])

  useEffect(()=>{
    contaApi.list().then(r=> setContas(r.data)).catch(()=>{})
    if(id){
      api.get(id).then(res=> setForm(res.data)).catch(e=>console.error(e))
    }
  },[id])

  const submit = async (e)=>{
    e.preventDefault()
    try{
      const payload = {...form, conta: form.conta && form.conta.idConta ? { idConta: Number(form.conta.idConta) } : null }
      if(id) await api.update(id, payload)
      else await api.create(payload)
      nav('/despesas')
    }catch(e){ console.error(e); alert('Erro ao salvar') }
  }

  return (
    <div>
      <h2>{id ? 'Editar' : 'Nova'} Despesa</h2>
      <form onSubmit={submit}>
        <div className="form-row"><label>Nome: <input value={form.nomeDespesa||''} onChange={e=>setForm({...form, nomeDespesa:e.target.value})} required/></label></div>
        <div className="form-row"><label>Tipo: <input value={form.tipoDespesa||''} onChange={e=>setForm({...form, tipoDespesa:e.target.value})} /></label></div>
        <div className="form-row"><label>Valor: <input type="number" value={form.valor||0} onChange={e=>setForm({...form, valor: Number(e.target.value)})} required/></label></div>
        <div className="form-row"><label>Data: <input type="date" value={form.dataGasto||''} onChange={e=>setForm({...form, dataGasto: e.target.value})} /></label></div>
        <div className="form-row">
          <label>Conta:
            <select value={form.conta?.idConta || ''} onChange={e=>setForm({...form, conta: { idConta: e.target.value } })}>
              <option value="">-- selecione --</option>
              {contas.map(c=> <option key={c.idConta} value={c.idConta}>{c.numeroConta || c.idConta} - {c.banco || ''}</option>)}
            </select>
          </label>
        </div>
        <button className="btn btn-primary" type="submit">Salvar</button>
      </form>
    </div>
  )
}
