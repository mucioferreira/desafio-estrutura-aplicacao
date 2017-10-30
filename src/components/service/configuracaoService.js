import VueNotifications from 'vue-notifications'

export default {
  uri: 'http://localhost:8090/api/',

  mensagemErro: function (error) {
    error.data.errors.map(erro =>
      VueNotifications.error({title: 'Erro!', message: erro})
    )
  }
}
