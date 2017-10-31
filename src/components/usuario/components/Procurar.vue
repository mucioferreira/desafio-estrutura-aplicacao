<template>
  <aside>
  <div class="control-group">
    <div class="control-group">
      <label for="usuario" class="control-label">Procurar usuario: </label>
        <div class="controls">
          <input class="selecionador" id="usuario" type="text" name="usuario" v-model="usuario.nome" disabled>
          <a class="btn-buscar buttonBuscar" v-on:click="openPesquisar()">Buscar</a>
        </div>
    </div>
  </div>

    <modal classes="modal-box" height="auto" name="procurarUsuario">
      <div class="modal-header">
        <h3 class="modal-title">Selecionar usuario</h3>
      </div>
      <div class="modal-body">
        <input id="nome" type="text" name="nome" v-model="nome" placeholder="Procurar pelo nome">
        <table class="table table-bordered data-table">
          <thead>
            <th>Nome</th>
            <th></th>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" class="grade">
              <td>{{ usuario.nome }}</td>
              <td>
                <a v-on:click="selecionarUsuario(usuario)" class="btn btn-primary">
                  <i class="fa fa-check"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button v-on:click="closePesquisar()" class="btn btn-danger">
          Cancelar
        </button>
      </div>
    </modal>

  </aside>
</template>

<script>
import _ from 'lodash'
import UsuarioService from '@/components/service/usuario'

export default {
  data: function () {
    return {
      usuarios: [],
      usuario: {},
      nome: null
    }
  },
  watch: {
    nome: _.debounce(function (nome) {
      UsuarioService.procurarPorNome(nome, usuarios => { this.usuarios = usuarios })
    }, 350)
  },
  methods: {
    selecionarUsuario: function (usuario) {
      this.usuario = usuario
      this.$emit('selecionado', usuario)
      this.closePesquisar()
    },
    closePesquisar: function () {
      this.$modal.hide('procurarUsuario')
    },
    openPesquisar: function () {
      this.$modal.show('procurarUsuario')
    }
  }
}
</script>