import Vue from 'vue'
import ConfiguracaoService from '@/components/service/configuracaoService'
import VueNotifications from 'vue-notifications'

const url = ConfiguracaoService.uri + 'servidor/'

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
  getIp: function (ip) {
    return Vue.http.get(url + "ip/" + ip)
  },
  post: function (novoNome, novoIp, novoTipoServidor) {
    return Vue.http.post(url, {nome: novoNome, ip: novoIp, tipoServidor: novoTipoServidor})
  },
  put: function (servidor) {
    return Vue.http.put(url, {id: servidor.id, nome: servidor.nome, ip: servidor.ip, tipoServidor: servidor.tipoServidor})
  },
  delete: function (servidor) {
    return Vue.http.delete(url, {body: {id: servidor.id, nome: servidor.nome, ip: servidor.ip, tipoServidor: servidor.tipoServidor}})
  },
  procurarServidor: function (id, servidor, encontrado) {
    this.getId(id).then(
      response => {
        servidor(response.body.data)
        encontrado(true)
      },
      error => {
        error.data.errors.map(erro =>
          VueNotifications.error({title: 'Erro!', message: erro})
        )
      }
    )
  }
}
