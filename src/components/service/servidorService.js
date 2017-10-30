import Vue from 'vue'
import ConfiguracaoService from '@/components/service/configuracaoService'
import VueNotifications from 'vue-notifications'
import router from '@/router'

const url = ConfiguracaoService.uri + 'servidor/'

export default {
  get: function () {
    return Vue.http.get(url)
  },
  carregarServidores: function (pagina, servidores, totalPaginas) {
    return Vue.http.get(url + '?pagina=' + pagina).then(
      response => {
        servidores(response.body.data.content)
        totalPaginas(response.body.data.totalPages)
      },
      error => {
        ConfiguracaoService.mensagemErro(error)
      }
    )
  },
  getId: function (id) {
    return Vue.http.get(url + id)
  },
  getIp: function (ip) {
    return Vue.http.get(url + 'ip/' + ip)
  },
  post: function (servidor) {
    Vue.http.post(url, {nome: servidor.nome, ip: servidor.ip, tipoServidor: servidor.tipoServidor}).then(
      response => {
        VueNotifications.success({title: 'Sucesso!', message: response.body.data.nome + ' adicionado com sucesso!'})
        router.push('/servidor/' + response.body.data.id)
      },
      error => {
        ConfiguracaoService.mensagemErro(error)
      }
    )
  },
  put: function (servidor) {
    Vue.http.put(url, {id: servidor.id, nome: servidor.nome, ip: servidor.ip, tipoServidor: servidor.tipoServidor}).then(
      response => {
        VueNotifications.success({title: 'Sucesso!', message: response.body.data.nome + ' modificado com sucesso!'})
        router.push('/servidor/' + response.body.data.id)
      },
      error => {
        ConfiguracaoService.mensagemErro(error)
      }
    )
  },
  delete: function (servidor) {
    Vue.http.delete(url, {body: {id: servidor.id, nome: servidor.nome, ip: servidor.ip, tipoServidor: servidor.tipoServidor}}).then(
      response => {
        router.push('/servidor/')
        VueNotifications.success({title: 'Sucesso!', message: servidor.nome + ' excluido com sucesso!'})
      },
      error => {
        ConfiguracaoService.mensagemErro(error)
      }
    )
  },
  procurarServidor: function (id, servidor, encontrado) {
    this.getId(id).then(
      response => {
        servidor(response.body.data)
        encontrado(true)
      },
      error => {
        ConfiguracaoService.mensagemErro(error)
      }
    )
  }
}
