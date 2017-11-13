<template>
  <aside>
  <div class="control-group">
    <div class="control-group">
      <label for="servidor" class="control-label">Procurar nó da rede: </label>
        <div class="controls">
          <input id="servidor" type="text" name="servidor" v-model="ip" placeholder="Digite o IP do servidor principal">
          <a v-if="!nenhum" v-on:click="selecionarNoDaRede(null)" > Selecionar nenhum</a>
        </div>

        <table v-if="nosDaRede.length" class="table table-bordered data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Servidor Principal</th>
              <th>Ambiente</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="noDaRede in nosDaRede" class="grade">
              <td v-if="selecionar"><a v-on:click="selecionarNoDaRede(noDaRede)" class="btn btn-warning">Selecionar</a></td>
              <td v-else>
                <router-link :to="`/servidor/${noDaRede.servidor.id}`" class="btn btn-primary"><i class="fa fa-arrow-left"></i></router-link>
              </td>
              <td>
                <table class="table table-bordered table-invoice no-margin">
                  <tbody>
                    <tr>
                      <td><strong>Nome</strong></td>
                      <td>{{ noDaRede.servidor.nome }}</td>
                    </tr>
                    <tr>
                      <td><strong>IP</strong></td>
                      <td>{{ noDaRede.servidor.ip }}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>{{ noDaRede.nomeAmbienteDaRede }}</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
  </aside>
</template>

<script>
import _ from 'lodash'
import NoDaRedeService from '@/components/service/noDaRede'

export default {
  props: ['selecionar', 'nenhum'],
  data: function () {
    return {
      nosDaRede: [],
      ip: ''
    }
  },
  watch: {
    ip: _.debounce(function (ip) {
      NoDaRedeService.procurarPorIpServidorPrincipal(ip, nosDaRede => { this.nosDaRede = nosDaRede })
    }, 350)
  },
  methods: {
    selecionarNoDaRede: function (noDaRede) {
      this.$emit('selecionado', noDaRede)
      this.nosDaRede = []
    }
  }
}
</script>