<template>
  <aside v-if="encontrado">
    <h1>Modificar Usuário - <small>{{ usuario.id }}</small></h1>
    <hr>
    <div class="widget-box">
      <div class="widget-content">
        <form v-on:submit="modificarUsuario(usuario)" class="form-horizontal" name="basic_validate" id="basic_validate" novalidate="novalidate">
          <div class="control-group">
            <label for="nome" class="control-label">Nome: </label>
            <div class="controls">
              <input id="nome" type="text" name="nome" v-model="usuario.nome" minlength="4">
            </div>
          </div>
          <div class="form-actions">
            <button class="btn btn-success">Modificar</button>
            <router-link to="/usuario/" class="btn btn-primary">Voltar</router-link>
          </div>
        </form>
      </div>
    </div>
  </aside>
</template>

<script>
import UsuarioService from '@/components/service/usuarioService'
import VueNotifications from 'vue-notifications'
import router from '@/router'

export default {
  data: function () {
    return {
      encontrado: false,
      nome: null,
      usuario: null
    }
  },
  router,
  methods: {
    procurarUsuario: function (id) {
      var t = this
      UsuarioService.getId(id).then(
        response => {
          t.usuario = response.body.data
          t.encontrado = true
        },
        error => {
          error.data.errors.map(erro =>
            VueNotifications.error({title: 'Erro!', message: erro})
          )
        }
      )
    },
    modificarUsuario: function (usuario) {
      var t = this
      UsuarioService.put(usuario).then(
        response => {
          t.usuario = response.body.data
          VueNotifications.success({title: 'Sucesso!', message: response.body.data.nome + ' modificado com sucesso!'})
        },
        error => {
          error.data.errors.map(erro =>
            VueNotifications.error({title: 'Erro!', message: erro})
          )
        }
      )
      event.preventDefault()
    }
  },
  mounted: function () {
    this.procurarUsuario(this.$route.params.id)
  }
}
</script>