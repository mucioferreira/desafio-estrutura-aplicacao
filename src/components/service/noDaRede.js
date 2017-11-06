import Vue from 'vue'
import GeralService from '@/components/service/geral'
import router from '@/router'

const nome = 'Nó da rede'
const url = GeralService.uri + 'no-da-rede/'
const path = '/no-da-rede/'

export default {
  carregarNosDaRede: function (pagina, usuariosDaRede, totalPaginas) {
    Vue.http.get(url + '?pagina=' + pagina).then(
      response => {
        usuariosDaRede(response.body.data.content)
        totalPaginas(response.body.data.totalPages)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  carregarNosDaRedeTodos: function (usuariosDaRede) {
    Vue.http.get(url + 'todos').then(
      response => {
        usuariosDaRede(response.body.data)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  procurarPorIpServidorPrincipal: function (ip, servidores) {
    Vue.http.get(url + '?ip=' + ip).then(
      response => {
        servidores(response.body.data)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  post: function (noDaRede) {
    Vue.http.post(url, {id: noDaRede.id, ambienteDaRede: noDaRede.ambienteDaRede, proximo: noDaRede.proximo.id, servidor: noDaRede.servidor.id}).then(
      response => {
        GeralService.mensagemAdicionado(nome)
        router.push(path + response.body.data.id)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  put: function (noDaRede) {
    Vue.http.put(url, {id: noDaRede.id, ambienteDaRede: noDaRede.ambienteDaRede, proximo: noDaRede.proximo.id, servidor: noDaRede.servidor.id}).then(
      response => {
        GeralService.mensagemModificado(nome)
        router.push(path + response.body.data.id)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  delete: function (noDaRede) {
    Vue.http.delete(url, {body: JSON.stringify(noDaRede)}).then(
      response => {
        GeralService.mensagemExcluido(nome)
        router.push(path)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  procurarNoDaRede: function (id, noDaRede, encontrado) {
    Vue.http.get(url + id).then(
      response => {
        noDaRede(response.body.data)
        if (!(typeof encontrado === 'undefined')) encontrado(true)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  }
}
