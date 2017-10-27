<template>
  <aside>
    <h1>Novo Usuário</h1>
    <hr>
    <div class="widget-box">
      <div class="widget-content">
        <form v-on:submit="adicionarUsuario" class="form-horizontal" name="basic_validate" id="basic_validate" novalidate="novalidate">
          <div class="control-group">
            <label for="nome" class="control-label">Nome: </label>
            <div class="controls">
              <input id="nome" type="text" name="nome" v-model="nome" minlength="4">
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
import UsuarioService from '@/components/service/usuarioService'
import VueNotifications from 'vue-notifications'

export default {
  data: function () {
    return {
      nome: ''
    }
  },
  methods: {
    adicionarUsuario: function () {
      var t = this
      UsuarioService.post(t.nome).then(
        response => {
          VueNotifications.success({title: 'Sucesso!', message: response.body.data.nome + ' adicionado com sucesso!'})
          t.$router.push('/usuario/' + response.body.data.id)
        },
        error => {
          error.data.errors.map(erro =>
            VueNotifications.error({title: 'Erro!', message: erro})
          )
        }
      )
      event.preventDefault()
    }
  }
}
</script>