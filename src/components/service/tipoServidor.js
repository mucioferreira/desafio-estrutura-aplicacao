import Vue from 'vue'
import GeralService from '@/components/service/geral'

const url = GeralService.uri + 'tipo-servidor/'

export default {
  get: function (tipos) {
    Vue.http.get(url).then(
      response => {
        tipos(response.body.data)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  }
}
