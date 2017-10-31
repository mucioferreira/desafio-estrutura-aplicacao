import Vue from 'vue'
import GeralService from '@/components/service/geral'
import router from '@/router'

const url = GeralService.uri + 'servidor/'
const path = '/servidor/'

export default {
  get: function () {
    return Vue.http.get(url)
  },
  carregarServidores: function (pagina, servidores, totalPaginas) {
    Vue.http.get(url + '?pagina=' + pagina).then(
      response => {
        servidores(response.body.data.content)
        totalPaginas(response.body.data.totalPages)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  getId: function (id) {
    return Vue.http.get(url + id)
  },
  procurarPorIp: function (ip, servidores) {
    Vue.http.get(url + '?ip=' + ip).then(
      response => {
        servidores(response.body.data)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  post: function (servidor) {
    Vue.http.post(url, {nome: servidor.nome, ip: servidor.ip, tipoServidor: servidor.tipoServidor}).then(
      response => {
        GeralService.mensagemAdicionado(response.body.data.nome)
        router.push(path + response.body.data.id)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  put: function (servidor) {
    Vue.http.put(url, {id: servidor.id, nome: servidor.nome, ip: servidor.ip, tipoServidor: servidor.tipoServidor}).then(
      response => {
        GeralService.mensagemModificado(response.body.data.nome)
        router.push(path + response.body.data.id)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  delete: function (servidor) {
    Vue.http.delete(url, {body: {id: servidor.id}}).then(
      response => {
        GeralService.mensagemExcluido(servidor.nome)
        router.push(path)
      },
      error => {
        GeralService.mensagemErro(error)
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
        GeralService.mensagemErro(error)
      }
    )
  }
}
