<template>
  <aside>
  <div class="control-group">
    <div class="control-group">
      <label for="usuario" class="control-label">Procurar usuario: </label>
        <div class="controls">
          <input id="usuario" type="text" name="usuario" v-model="nome">
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
              <td v-if="selecionar"><a v-on:click="selecionarUsuario(usuario)" class="btn btn-warning">Selecionar</a></td>
              <td v-else>
                <router-link :to="`/usuario/${usuario.id}`" class="btn btn-primary"><i class="fa fa-arrow-left"></i></router-link>
              </td>
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
  props: ['selecionar'],
  data: function () {
    return {
      usuarios: [],
      nome: ''
    }
  },
  watch: {
    nome: _.debounce(function (nome) {
      UsuarioService.procurarPorNome(nome, usuarios => { this.usuarios = usuarios })
    }, 350)
  },
  methods: {
    selecionarUsuario: function (usuario) {
      this.$emit('selecionado', usuario)
      this.usuarios = []
    }
  }
}
</script>