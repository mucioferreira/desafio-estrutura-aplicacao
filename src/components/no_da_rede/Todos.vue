<template>
  <aside>
    <h1>Todos nós na rede</h1>
    <hr>
    <div class="widget-box">
      <div class="widget-content nopadding">
        <table class="table table-bordered data-table">
          <thead>
            <th>#</th>
            <th>Ambiente</th>
            <th>Servidor Principal</th>
            <th colspan="1"></th>
          </thead>
          <tbody>
            <tr v-for="noDaRede in nosDaRede" class="grade">
              <td>{{ noDaRede.id }}</td>
              <td>{{ noDaRede.nomeAmbienteDaRede }}</td>
              <td>
                <table class="table table-bordered table-invoice no-margin">
                  <tbody>
                    <tr>
                      <td><strong>Nome</strong></td>
                      <td>{{ noDaRede.servidor.nome }}</td>
                    </tr>
                    <tr>
                      <td><strong>IP</strong></td>
                      <td>{{ noDaRede.servidor.ip }}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <router-link :to="`/no-da-rede/${noDaRede.id}`" class="btn btn-primary">
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
import NoDaRedeService from '@/components/service/noDaRede'

export default {
  data: function () {
    return {
      nosDaRede: [],
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
      NoDaRedeService.carregarNosDaRede(this.pagina, nosDaRede => { this.nosDaRede = nosDaRede }, totalPaginas => { this.totalPaginas = totalPaginas })
    }
  }
}
</script>