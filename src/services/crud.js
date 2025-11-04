import api from './api'
export default function crud(resource){
  const r = resource.startsWith('/') ? resource : `/${resource}`
  return {
    list: ()=> api.get(`${r}`),
    get: (id)=> api.get(`${r}/${id}`),
    create: (body)=> api.post(r, body),
    update: (id, body)=> api.put(`${r}/${id}`, body),
    remove: (id)=> api.delete(`${r}/${id}`)
  }
}
