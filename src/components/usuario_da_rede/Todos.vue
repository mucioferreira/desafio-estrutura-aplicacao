<template>
  <aside>
    <h1>Todos usuários na rede</h1>
    <hr>
    <div class="widget-box">
      <div class="widget-content nopadding">
        <table class="table table-bordered data-table">
          <thead>
            <th>#</th>
            <th>Nome do Usuario</th>
            <th>IP do Servidor</th>
            <th colspan="1"></th>
          </thead>
          <tbody>
            <tr v-for="usuarioDaRede in usuariosDaRede" class="grade">
              <td><router-link :to="`/usuario-da-rede/${usuarioDaRede.id}`">{{ usuarioDaRede.id }}</router-link></td>
              <td><router-link :to="`/usuario/${usuarioDaRede.usuario.id}`">{{ usuarioDaRede.usuario.nome }}</router-link></td>
              <td>
                <table class="table table-bordered table-invoice no-margin">
                  <tbody>
                    <tr>
                      <td><strong>Nome</strong></td>
                      <td>{{ usuarioDaRede.noDaRede.servidor.nome }}</td>
                    </tr>
                    <tr>
                      <td><strong>IP</strong></td>
                      <td>{{ usuarioDaRede.noDaRede.servidor.ip }}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <router-link :to="`/usuario-da-rede/${usuarioDaRede.id}`" class="btn btn-primary">
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
import UsuarioDaRedeService from '@/components/service/usuarioDaRede'

export default {
  data: function () {
    return {
      usuariosDaRede: [],
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
      UsuarioDaRedeService.carregarUsuariosDaRede(this.pagina, usuariosDaRede => { this.usuariosDaRede = usuariosDaRede }, totalPaginas => { this.totalPaginas = totalPaginas })
    }
  }
}
</script>