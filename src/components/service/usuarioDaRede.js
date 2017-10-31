import Vue from 'vue'
import GeralService from '@/components/service/geral'
import router from '@/router'

const nome = 'Usuário da rede'
const url = GeralService.uri + 'usuario-da-rede/'
const path = '/usuario-da-rede/'

export default {
  get: function () {
    return Vue.http.get(url)
  },
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
  getId: function (id) {
    return Vue.http.get(url + id)
  },
  post: function (usuarioDaRede) {
    Vue.http.post(url, {servidor: usuarioDaRede.servidor, usuario: usuarioDaRede.usuario, descricao: usuarioDaRede.descricao}).then(
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
    Vue.http.put(url, {id: usuarioDaRede.id, servidor: usuarioDaRede.servidor, usuario: usuarioDaRede.usuario, descricao: usuarioDaRede.descricao}).then(
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
    Vue.http.delete(url, {body: {id: usuarioDaRede.id}}).then(
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
    this.getId(id).then(
      response => {
        usuarioDaRede(response.body.data)
        encontrado(true)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  }
}
