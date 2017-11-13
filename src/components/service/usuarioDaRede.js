import Vue from 'vue'
import GeralService from '@/components/service/geral'
import router from '@/router'

const nome = 'Usuário da rede'
const url = GeralService.uri + 'usuario-da-rede/'
const path = '/usuario-da-rede/'

export default {
  carregarUsuariosDaRede: function (pagina, usuariosDaRede, totalPaginas) {
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
  carregarUsuariosDaRedeTodos: function (usuariosDaRede) {
    Vue.http.get(url + 'todos').then(
      response => {
        usuariosDaRede(response.body.data)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  post: function (usuarioDaRede) {
    Vue.http.post(url, JSON.stringify(usuarioDaRede)).then(
      response => {
        GeralService.mensagemAdicionado(nome)
        router.push(path + response.body.data.id)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  put: function (usuarioDaRede) {
    Vue.http.put(url, JSON.stringify(usuarioDaRede)).then(
      response => {
        GeralService.mensagemModificado(nome)
        router.push(path + response.body.data.id)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  delete: function (usuarioDaRede) {
    Vue.http.delete(url, {body: JSON.stringify(usuarioDaRede)}).then(
      response => {
        GeralService.mensagemExcluido(nome)
        router.push(path)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  procurarUsuarioDaRede: function (id, usuarioDaRede, encontrado) {
    Vue.http.get(url + id).then(
      response => {
        usuarioDaRede(response.body.data)
        if (!(typeof encontrado === 'undefined')) encontrado(true)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  }
}
