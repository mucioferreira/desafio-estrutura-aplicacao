import Vue from 'vue'
import GeralService from '@/components/service/geral'
import router from '@/router'

const url = GeralService.uri + 'usuario/'
const path = '/usuario/'

export default {
  carregarUsuarios: function (pagina, usuarios, totalPaginas) {
    Vue.http.get(url + '?pagina=' + pagina).then(
      response => {
        usuarios(response.body.data.content)
        totalPaginas(response.body.data.totalPages)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  procurarPorNome: function (nome, usuarios) {
    Vue.http.get(url + '?nome=' + nome).then(
      response => {
        usuarios(response.body.data)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  post: function (usuario) {
    Vue.http.post(url, JSON.stringify(usuario)).then(
      response => {
        GeralService.mensagemAdicionado(response.body.data.nome)
        router.push(path + response.body.data.id)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  put: function (usuario) {
    Vue.http.put(url, JSON.stringify(usuario)).then(
      response => {
        GeralService.mensagemModificado(response.body.data.nome)
        router.push(path + response.body.data.id)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  delete: function (usuario) {
    Vue.http.delete(url, {body: JSON.stringify(usuario)}).then(
      response => {
        GeralService.mensagemExcluido(usuario.nome)
        router.push(path)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  },
  procurarUsuario: function (id, usuario, encontrado) {
    Vue.http.get(url + id).then(
      response => {
        usuario(response.body.data)
        if (!(typeof encontrado === 'undefined')) encontrado(true)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  }
}
