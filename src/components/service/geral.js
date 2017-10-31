import VueNotifications from 'vue-notifications'

const mensagemSucesso = function (mensagem) {
  VueNotifications.success({title: 'Sucesso!', message: mensagem})
}

export default {
  uri: 'http://localhost:8090/api/',

  mensagemAdicionado: function (identificacao) {
    mensagemSucesso(identificacao + ' adicionado com sucesso!')
  },

  mensagemModificado: function (identificacao) {
    mensagemSucesso(identificacao + ' modificado com sucesso!')
  },

  mensagemExcluido: function (identificacao) {
    mensagemSucesso(identificacao + ' excluido com sucesso!')
  },

  mensagemErro: function (error) {
    error.data.errors.map(erro =>
      VueNotifications.error({title: 'Erro!', message: erro})
    )
  }
}
