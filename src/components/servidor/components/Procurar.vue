<template>
  <aside>
  <div class="control-group">
    <div class="control-group">
      <label for="servidor" class="control-label">Procurar servidor: </label>
        <div class="controls">
          <input id="servidor" type="text" name="servidor" v-model="servidor.ip">
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
              <td><input v-on:click="selecionarServidor(servidor)" type="radio" name="servidor"></td>
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
  data: function () {
    return {
      servidores: [],
      servidor: {}
    }
  },
  watch: {
    servidor: {
      handler: _.debounce(function (servidor) {
        ServidorService.procurarPorIp(servidor.ip, servidores => { this.servidores = servidores })
      }, 350),
      deep: true
    }
  },
  methods: {
    selecionarServidor: function (servidor) {
      this.servidor = servidor
      this.$emit('selecionado', servidor)
    }
  }
}
</script>