<template>
  <aside>
    <h1>Novo Usuário</h1>
    <hr>
    <div class="widget-box">
      <div class="widget-content">
        <form v-on:submit="adicionarUsuario(usuario)" class="form-horizontal" name="basic_validate" id="basic_validate" novalidate="novalidate">
          <div class="control-group">
            <label for="nome" class="control-label">Nome: </label>
            <div class="controls">
              <input id="nome" type="text" name="nome" v-model="usuario.nome" minlength="4">
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
import UsuarioService from '@/components/service/usuario'

export default {
  data: function () {
    return {
      usuario: {}
    }
  },
  methods: {
    adicionarUsuario: function (usuario) {
      UsuarioService.post(usuario)
      event.preventDefault()
    }
  }
}
</script>