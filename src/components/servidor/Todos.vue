<template>
  <aside>
    <h1>Todos Servidores</h1>
    <hr>

    <div class="widget-box">
      <div class="widget-content nopadding">
        <table class="table table-bordered data-table">
          <thead>
            <th>#</th>
            <th>Nome</th>
            <th>Ip</th>
            <th>Tipo</th>
            <th></th>
          </thead>
          <tbody>
            <tr v-for="servidor in servidores" class="grade">
              <td>{{ servidor.id }}</td>
              <td><router-link :to="`/servidor/${servidor.id}`">{{ servidor.nome }}</router-link></td>
              <td>{{ servidor.ip }}</td>
              <td>{{ servidor.nomeTipoServidor }}</td>
              <td>
                <router-link :to="`/servidor/${servidor.id}`" class="btn btn-primary">
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
import ServidorService from '@/components/service/servidor'

export default {
  data: function () {
    return {
      servidores: [],
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
      ServidorService.carregarServidores(this.pagina, servidores => { this.servidores = servidores }, totalPaginas => { this.totalPaginas = totalPaginas })
    }
  }
}
</script>