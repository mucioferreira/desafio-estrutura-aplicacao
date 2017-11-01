<template>
  <aside>
  <div class="control-group">
    <div class="control-group">
      <label for="servidor" class="control-label">Procurar nó da rede: </label>
        <div class="controls">
          <input id="servidor" type="text" name="servidor" v-model="ip" placeholder="Digite o IP do servidor principal">
          <a v-on:click="selecionarNo(null)" > Selecionar nenhum</a>
        </div>

        <table v-if="nos.length" class="table table-bordered data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Servidor Principal</th>
              <th>Ambiente</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="no in nos" class="grade">
              <td v-if="selecionar"><a v-on:click="selecionarNo(no)" class="btn btn-warning">Selecionar</a></td>
              <td v-else>
                <router-link :to="`/servidor/${no.servidor.id}`" class="btn btn-primary"><i class="fa fa-arrow-left"></i></router-link>
              </td>
              <td>
                <table class="table table-bordered table-invoice no-margin">
                  <tbody>
                    <tr>
                      <td><strong>Nome</strong></td>
                      <td>{{ no.servidor.nome }}</td>
                    </tr>
                    <tr>
                      <td><strong>IP</strong></td>
                      <td>{{ no.servidor.ip }}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>{{ no.nomeAmbienteDaRede }}</td>
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
  props: ['selecionar'],
  data: function () {
    return {
      nos: [],
      ip: ''
    }
  },
  watch: {
    ip: _.debounce(function (ip) {
      NoDaRedeService.procurarPorIpServidorPrincipal(ip, nos => { this.nos = nos })
    }, 350)

  },
  methods: {
    selecionarNo: function (no) {
      this.$emit('selecionado', no)
      this.nos = []
    }
  }
}
</script>