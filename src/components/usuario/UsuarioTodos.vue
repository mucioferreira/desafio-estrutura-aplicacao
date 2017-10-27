<template>
  <aside>
    <h1>Todos Usuários</h1>
    <hr>
    <div class="widget-box">
      <div class="widget-content nopadding">
        <table class="table table-bordered data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th colspan="1"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" class="grade">
              <td>{{ usuario.id }}</td>
              <td><router-link :to="`/usuario/${usuario.id}`">{{ usuario.nome }}</router-link></td>
              <td>
                <router-link :to="`/usuario/${usuario.id}`" class="btn btn-info">
                  <i class="fa fa-plus"></i>
                </router-link>
                <router-link :to="`/usuario/modificar/${usuario.id}`" class="btn btn-primary">
                  <i class="fa fa-pencil"></i>
                </router-link>
                <button v-on:click="openExcluirUsuario(usuario)" class="btn btn-danger">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="paginate">
          <button v-on:click="anteriorPagina" class="previous fg-button ui-button ui-state-default">Anterior</button>
          <button v-on:click="proximaPagina" class="next fg-button ui-button ui-state-default">Proximo</button>
        </div>
      </div>
    </div>

    <modal classes="modal-box" width="300" height="auto" name="excluir">
      <div class="modal-header">
        <h3 class="modal-title">Confirmar exclusão - {{ usuario.id }}</h3>
      </div>
      <div class="modal-body">
        Tem certeza que deseja deletar o usuário: <strong>{{ usuario.nome }}</strong>?
      </div>
      <div class="modal-footer">
        <button v-on:click="closeExcluirUsuario()" class="btn btn-primary">
          Não
        </button>
        <button v-on:click="excluirUsuario(usuario)" class="btn">
          Sim
        </button>
      </div>
    </modal>
  </aside>
</template>

<script>
import UsuarioService from '@/components/service/usuarioService'
import VueNotifications from 'vue-notifications'

export default {
  data: function () {
    return {
      usuario: {},
      usuarios: [],
      pagina: 0,
      totalPaginas: 0,
      time: 0,
      duration: 5000
    }
  },
  methods: {
    carregarUsuarios: function (pagina) {
      var t = this
      UsuarioService.getPagina(pagina).then(
        response => {
          t.usuarios = response.body.data.content
          t.totalPaginas = response.body.data.totalPages
        },
        error => {
          console.log('Erro: ' + error.status)
          VueNotifications.error({title: 'Erro!', message: 'Nenhum usuario encontrado!'})
        }
      )
    },
    excluirUsuario: function () {
      var t = this
      UsuarioService.delete(t.usuario).then(
        response => {
          this.carregarUsuarios(t.pagina)
          this.closeExcluirUsuario()
          VueNotifications.success({title: 'Sucesso!', message: t.usuario.nome + ' excluido com sucesso!'})
        },
        error => {
          error.data.errors.map(erro =>
            VueNotifications.error({title: 'Erro!', message: erro})
          )
        }
      )
    },
    proximaPagina: function () {
      if (this.pagina < (this.totalPaginas - 1)) this.carregarUsuarios((++this.pagina))
    },
    anteriorPagina: function () {
      if (this.pagina > 0) this.carregarUsuarios((--this.pagina))
    },
    openExcluirUsuario: function (usuario) {
      this.usuario = usuario
      this.$modal.show('excluir')
    },
    closeExcluirUsuario: function () {
      this.$modal.hide('excluir')
    }
  },
  mounted: function () {
    this.carregarUsuarios(this.pagina)
  }
}
</script>