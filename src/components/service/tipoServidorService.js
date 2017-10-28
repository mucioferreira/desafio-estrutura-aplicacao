import Vue from 'vue'
import ConfiguracaoService from '@/components/service/configuracaoService'
import VueNotifications from 'vue-notifications'

const url = ConfiguracaoService.uri + 'tipo-servidor/'

export default {
  get: function (tipos) {
    Vue.http.get(url).then(
      response => {
        tipos(response.body.data)
      },
      error => {
        error.data.errors.map(erro =>
          VueNotifications.error({title: 'Erro!', message: erro})
        )
      }
    )
  }
}
