<template>
  <div class="widget-box">
    <div class="widget-content">
      <form v-on:submit="actionMethod(servidor)" class="form-horizontal" name="basic_validate" id="basic_validate" novalidate="novalidate">
        <div class="control-group">
          <label for="nome" class="control-label">Nome: </label>
          <div class="controls">
            <input id="nome" type="text" name="nome" v-model="servidor.nome" minlength="4">
          </div>
        </div>
        <div class="control-group">
          <label for="ip" class="control-label">IP: </label>
          <div class="controls">
            <input id="ip" type="text" name="ip" v-model="servidor.ip" minlength="4">
          </div>
        </div>
        <div class="control-group">
          <label for="tipoServidor" class="control-label">Tipo do Servidor: </label>
          <div class="controls">
            <select id="tipoServidor" v-model="servidor.tipoServidor" style="margin-top: 7px; width: 100%;" required>
              <option v-for="(tipo, nome) in tipos"  v-bind:value="tipo">{{ nome }}</option>
            </select>
          </div>
        </div>
        <div class="form-actions">
          <button class="btn btn-success">Salvar</button>
          <router-link to="/servidor/" class="btn btn-danger">Cancelar</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TipoServidorService from '@/components/service/tipoServidor'

export default {
  props: ['servidor', 'action'],
  data: function () {
    return {
      tipos: null
    }
  },
  methods: {
    actionMethod: function (servidor) {
      this.action(servidor)
      event.preventDefault()
    }
  },
  mounted: function () {
    TipoServidorService.get(tipos => { this.tipos = tipos })
  }
}
</script>