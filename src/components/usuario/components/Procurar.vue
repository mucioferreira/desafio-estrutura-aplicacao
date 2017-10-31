<template>
  <aside>
  <div class="control-group">
    <div class="control-group">
      <label for="usuario" class="control-label">Procurar usuario: </label>
        <div class="controls">
          <input id="usuario" type="text" name="usuario" v-model="usuario.nome">
        </div>

        <table v-if="usuarios.length" class="table table-bordered data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" class="grade">
              <td><input v-on:click="selecionarUsuario(usuario)" type="radio" name="usuario"></td>
              <td>{{ usuario.nome }}</td>
            </tr>
          </tbody>
        </table>

    </div>
  </div>

  </aside>
</template>

<script>
import _ from 'lodash'
import UsuarioService from '@/components/service/usuario'

export default {
  data: function () {
    return {
      usuarios: [],
      usuario: {}
    }
  },
  watch: {
    usuario: {
      handler: _.debounce(function (usuario) {
        UsuarioService.procurarPorNome(usuario.nome, usuarios => { this.usuarios = usuarios })
      }, 350),
      deep: true
    }
  },
  methods: {
    selecionarUsuario: function (usuario) {
      this.usuario = usuario
      this.$emit('selecionado', usuario)
    }
  }
}
</script>