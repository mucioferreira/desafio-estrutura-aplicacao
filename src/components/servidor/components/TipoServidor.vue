<template>
  <div class="control-group">
    <label for="tipoServidor" class="control-label">Tipo do Servidor: </label>
      <div class="controls">
        <select id="tipoServidor" v-model="value.tipoServidor" style="margin-top: 7px; width: 100%;" required>
          <option v-for="(tipo, nome) in tipos"  v-bind:value="tipo">{{ nome }}</option>
        </select>
      </div>
  </div>
</template>

<script>
import TipoServidorSerive from '@/components/service/tipoServidor'

export default {
  props: ['value'],
  data: function () {
    return {
      tipos: null
    }
  },
  mounted: function () {
    TipoServidorSerive.get(tipos => { this.tipos = tipos })
  }
}
</script>