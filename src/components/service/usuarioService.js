import Vue from 'vue'
import ConfiguracaoService from '@/components/service/configuracaoService'
import VueNotifications from 'vue-notifications'
import router from '@/router'

const url = ConfiguracaoService.uri + 'usuario/'

export default {
  get: function () {
    return Vue.http.get(url)
  },
  carregarUsuarios: function (pagina, usuarios, totalPaginas) {
    return Vue.http.get(url + '?pagina=' + pagina).then(
      response => {
        usuarios(response.body.data.content)
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
  post: function (usuario) {
    Vue.http.post(url, {nome: usuario.nome}).then(
      response => {
        VueNotifications.success({title: 'Sucesso!', message: response.body.data.nome + ' adicionado com sucesso!'})
        router.push('/usuario/' + response.body.data.id)
      },
      error => {
        ConfiguracaoService.mensagemErro(error)
      }
    )
  },
  put: function (usuario) {
    Vue.http.put(url, {id: usuario.id, nome: usuario.nome}).then(
      response => {
        VueNotifications.success({title: 'Sucesso!', message: response.body.data.nome + ' modificado com sucesso!'})
        router.push('/usuario/' + response.body.data.id)
      },
      error => {
        ConfiguracaoService.mensagemErro(error)
      }
    )
  },
  delete: function (usuario, funcoes) {
    Vue.http.delete(url, {body: {id: usuario.id, nome: usuario.nome}}).then(
      response => {
        funcoes.carregarUsuarios(funcoes.pagina)
        funcoes.closeExcluirUsuario()
        VueNotifications.success({title: 'Sucesso!', message: usuario.nome + ' excluido com sucesso!'})
      },
      error => {
        ConfiguracaoService.mensagemErro(error)
      }
    )
  },
  procurarUsuario: function (id, usuario, encontrado) {
    this.getId(id).then(
      response => {
        usuario(response.body.data)
        encontrado(true)
      },
      error => {
        ConfiguracaoService.mensagemErro(error)
      }
    )
  }
}
