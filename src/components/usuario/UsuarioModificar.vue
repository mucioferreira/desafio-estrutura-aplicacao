<template>
  <aside>
    <div v-if="encontrado">
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
              <router-link :to="`/usuario/${usuario.id}`" class="btn btn-primary">Voltar</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Nenhum usuário encontrado</h2>
    </div>
  </aside>
</template>

<script>
import UsuarioService from '@/components/service/usuarioService'

export default {
  data: function () {
    return {
      encontrado: false,
      usuario: null
    }
  },
  methods: {
    modificarUsuario: function (usuario) {
      UsuarioService.put(usuario)
      event.preventDefault()
    }
  },
  mounted: function () {
    UsuarioService.procurarUsuario(this.$route.params.id, usuario => { this.usuario = usuario }, encontrado => { this.encontrado = encontrado })
  }
}
</script>