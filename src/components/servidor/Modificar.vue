<template>
  <aside>
    <div v-if="encontrado">
      <h1>Modificar Servidor</h1>
      <hr>
      <div class="widget-box">
        <div class="widget-content">
          <form v-on:submit="modificarServidor(servidor)" class="form-horizontal" name="basic_validate" id="basic_validate" novalidate="novalidate">
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
              <button class="btn btn-success">Modificar</button>
              <router-link :to="`/servidor/${servidor.id}`" class="btn btn-primary">Voltar</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Nenhum servidor encontrado</h2>
    </div>
  </aside>
</template>

<script>
import ServidorService from '@/components/service/servidor'
import TipoServidorComponente from '@/components/servidor/components/TipoServidor'

export default {
  data: function () {
    return {
      servidor: {},
      encontrado: false,
      tipos: null
    }
  },
  methods: {
    modificarServidor: function (servidor) {
      ServidorService.put(servidor)
      event.preventDefault()
    }
  },
  mounted: function () {
    ServidorService.procurarServidor(this.$route.params.id, servidor => { this.servidor = servidor }, encontrado => { this.encontrado = encontrado })
  },
  components: {
    TipoServidorComponente
  }

}
</script>