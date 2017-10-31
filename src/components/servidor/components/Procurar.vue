<template>
  <aside>
  <div class="control-group">
    <div class="control-group">
      <label for="servidor" class="control-label">Procurar servidor: </label>
        <div class="controls">
          <input class="selecionador" id="servidor" type="text" name="servidor" v-model="servidor.nome" disabled>
          <a class="btn-buscar buttonBuscar" v-on:click="openPesquisar()">Buscar</a>
        </div>
        
    </div>
  </div>

    <modal classes="modal-box" height="auto" name="procurarServidor">
      <div class="modal-header">
        <h3 class="modal-title">Selecionar servidor</h3>
      </div>
      <div class="modal-body">
        <input id="ip" type="text" name="ip" v-model="ip" placeholder="Procurar pelo IP">
        <table class="table table-bordered data-table">
          <thead>
            <th>Nome</th>
            <th>Ip</th>
            <th></th>
          </thead>
          <tbody>
            <tr v-for="servidor in servidores" class="grade">
              <td>{{ servidor.nome }}</td>
              <td>{{ servidor.ip }}</td>
              <td>
                <a v-on:click="selecionarServidor(servidor)" class="btn btn-primary">
                  <i class="fa fa-check"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button v-on:click="closePesquisar()" class="btn btn-danger">
          Cancelar
        </button>
      </div>
    </modal>

  </aside>
</template>

<script>
import _ from 'lodash'
import ServidorService from '@/components/service/servidor'

export default {
  data: function () {
    return {
      servidores: [],
      servidor: {},
      ip: null
    }
  },
  watch: {
    ip: _.debounce(function (ip) {
      ServidorService.procurarPorIp(ip, servidores => { this.servidores = servidores })
    }, 350)
  },
  methods: {
    selecionarServidor: function (servidor) {
      this.servidor = servidor
      this.$emit('selecionado', servidor)
      this.closePesquisar()
    },
    closePesquisar: function () {
      this.$modal.hide('procurarServidor')
    },
    openPesquisar: function () {
      this.$modal.show('procurarServidor')
    }
  }
}
</script>