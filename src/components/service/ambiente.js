import Vue from 'vue'
import GeralService from '@/components/service/geral'

const url = GeralService.uri + 'ambiente-servidor/'

export default {
  get: function (ambientes) {
    Vue.http.get(url).then(
      response => {
        ambientes(response.body.data)
      },
      error => {
        GeralService.mensagemErro(error)
      }
    )
  }
}
