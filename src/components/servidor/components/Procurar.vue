<template>
  <aside>
  <div class="control-group">
    <div class="control-group">
      <label for="servidor" class="control-label">Procurar servidor: </label>
        <div class="controls">
          <input id="servidor" type="text" name="servidor" v-model="ip" placeholder="Digite o IP do servidor">
        </div>

        <table v-if="servidores.length" class="table table-bordered data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>IP</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="servidor in servidores" class="grade">
              <td v-if="selecionar"><a v-on:click="selecionarServidor(servidor)" class="btn btn-warning">Selecionar</a></td>
              <td v-else>
                <router-link :to="`/servidor/${servidor.id}`" class="btn btn-primary"><i class="fa fa-arrow-left"></i></router-link>
              </td>
              <td>{{ servidor.ip }}</td>
              <td>{{ servidor.nome }}</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
  </aside>
</template>

<script>
import _ from 'lodash'
import ServidorService from '@/components/service/servidor'

export default {
  props: ['selecionar'],
  data: function () {
    return {
      servidores: [],
      ip: ''
    }
  },
  watch: {
    ip: _.debounce(function (ip) {
      ServidorService.procurarPorIp(ip, servidores => { this.servidores = servidores })
    }, 350)
  },
  methods: {
    selecionarServidor: function (servidor) {
      this.$emit('selecionado', servidor)
      this.servidores = []
    }
  }
}
</script>