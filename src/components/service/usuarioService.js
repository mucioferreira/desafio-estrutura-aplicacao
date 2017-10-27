import Vue from 'vue'
import ConfiguracaoService from '@/components/service/configuracaoService'

const url = ConfiguracaoService.uri + 'usuario/'

export default {
  get: function () {
    return Vue.http.get(url)
  },
  getPagina: function (pagina) {
    return Vue.http.get(url + '?pagina=' + pagina)
  },
  getId: function (id) {
    return Vue.http.get(url + id)
  },
  post: function (novoNome) {
    return Vue.http.post(url, {nome: novoNome})
  },
  put: function (usuario) {
    return Vue.http.put(url, {id: usuario.id, nome: usuario.nome})
  },
  delete: function (usuario) {
    return Vue.http.delete(url, {body: {id: usuario.id, nome: usuario.nome}})
  }
}
