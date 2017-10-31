<template>
  <aside>
    <h1>Novo Servidor</h1>
    <hr>
    <div class="widget-box">
      <div class="widget-content">
        <form v-on:submit="adicionarServidor(servidor)" class="form-horizontal" name="basic_validate" id="basic_validate" novalidate="novalidate">
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
          <tipo-servidor-componente v-model="servidor"></tipo-servidor-componente>
          <div class="form-actions">
            <button class="btn btn-success">Adicionar</button>
            <router-link to="/servidor/" class="btn btn-primary">Voltar</router-link>
          </div>
        </form>
      </div>
    </div>
  </aside>
</template>

<script>
import ServidorSerive from '@/components/service/servidor'
import TipoServidorComponente from '@/components/servidor/components/TipoServidor'

export default {
  data: function () {
    return {
      servidor: {},
      tipos: null
    }
  },
  methods: {
    adicionarServidor: function (servidor) {
      ServidorSerive.post(servidor)
      event.preventDefault()
    }
  },
  components: {
    TipoServidorComponente
  }
}
</script>