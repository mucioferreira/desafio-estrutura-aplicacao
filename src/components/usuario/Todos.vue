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
                <router-link :to="`/usuario/${usuario.id}`" class="btn btn-primary">
                  <i class="fa fa-plus"></i>
                </router-link>
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
  </aside>
</template>

<script>
import UsuarioService from '@/components/service/usuario'

export default {
  data: function () {
    return {
      usuario: {},
      usuarios: [],
      pagina: null,
      totalPaginas: 0
    }
  },
  methods: {
    proximaPagina: function () {
      if (this.pagina < (this.totalPaginas - 1)) ++this.pagina
    },
    anteriorPagina: function () {
      if (this.pagina > 0) --this.pagina
    }
  },
  mounted: function () {
    this.pagina = 0
  },
  watch: {
    pagina: function () {
      UsuarioService.carregarUsuarios(this.pagina, usuarios => { this.usuarios = usuarios }, totalPaginas => { this.totalPaginas = totalPaginas })
    }
  }
}
</script>