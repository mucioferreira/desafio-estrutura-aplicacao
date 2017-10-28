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
          <div class="control-group">
              <label class="control-label">Tipo do Servidor:</label>
              <div class="controls">
                <label v-for="(tipo, nome) in tipos">
                  <input type="radio" v-model="servidor.tipoServidor" v-bind:value="tipo" name="tipoServidor" >
                  {{ nome }}
                </label>
              </div>
          </div>
          <div class="form-actions">
            <button class="btn btn-success">Adicionar</button>
            <router-link to="/usuario/" class="btn btn-primary">Voltar</router-link>
          </div>
        </form>
      </div>
    </div>
  </aside>
</template>

<script>
import TipoServidorSerive from '@/components/service/tipoServidorService'
// import ServidorSerive from '@/components/service/servidorSerive'
// import VueNotifications from 'vue-notifications'

export default {
  data: function () {
    return {
      servidor: {},
      tipos: null
    }
  },
  methods: {
    adicionarServidor: function (servidor) {
      console.log(servidor)
      event.preventDefault()
    }
    //   var t = this
    //   UsuarioService.post(usuario.nome).then(
    //     response => {
    //       VueNotifications.success({title: 'Sucesso!', message: response.body.data.nome + ' adicionado com sucesso!'})
    //       t.$router.push('/usuario/' + response.body.data.id)
    //     },
    //     error => {
    //       error.data.errors.map(erro =>
    //         VueNotifications.error({title: 'Erro!', message: erro})
    //       )
    //     }
    //   )
    // }
  },
  mounted: function () {
    TipoServidorSerive.get(tipos => { this.tipos = tipos })
  }
}
</script>