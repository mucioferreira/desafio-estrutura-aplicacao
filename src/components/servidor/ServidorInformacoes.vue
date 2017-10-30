<template>
  <aside>
    <div v-if="encontrado">
      <h1>Informação do servidor</h1>
      <hr>
      <div class="widget-box collapsible">
        <div class="widget-title">
          <a data-toggle="collapse" href="#collapseOne"> 
            <span class="icon"><i class="fa fa-server"></i></span>
            <h5>{{ servidor.nome }}</h5>
          </a> 

          <div class="action-buttons">
            <router-link :to="`/servidor/modificar/${servidor.id}`"><i class="fa fa-pencil"></i></router-link>
            <a v-on:click="openExcluirServidor(servidor)"> <i class="fa fa-trash"></i> </a>
          </div>
        </div>
        <div id="collapseOne" class="collapse in">
          <div class="widget-content">
            <table class="table table-bordered table-invoice no-margin">
              <tbody>
                <tr>
                  <td><strong>ID</strong></td>
                  <td>{{ servidor.id }}</td>
                </tr>
                <tr>
                  <td><strong>Nome:</strong></td>
                  <td>{{ servidor.nome }}</td>
                </tr>
                <tr>
                  <td><strong>IP:</strong></td>
                  <td>{{ servidor.ip }}</td>
                </tr>
                <tr>
                  <td><strong>Tipo do Servidor:</strong></td>
                  <td>{{ servidor.nomeTipoServidor }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="widget-title">
          <a data-toggle="collapse" href="#collapseTwo"> 
            <span class="icon"><i class="fa fa-users"></i></span>
            <h5>Usuarios relacionados com {{ servidor.nome }}</h5>
          </a>
        </div>
        <div id="collapseTwo" class="collapse">
          <div class="widget-content">
<!--             <ul v-if="servidor.usuarioDaRede.length">
              <li v-for="usuario in servidor.usuarioDaRede">{{ usuario }}</li>
            </ul>
            <p v-else>Nenhuma informação encontrada!</p> -->
          </div>
        </div>

        <div class="widget-title">
          <a data-toggle="collapse" href="#collapseThree"> 
            <span class="icon"><i class="fa fa-sitemap"></i></span>
            <h5>Outros servidores relacionados com {{ servidor.nome }}</h5>
          </a>
        </div>
        <div id="collapseThree" class="collapse">
          <div class="widget-content">
<!--             <ul v-if="servidor.noDaRede.length">
              <li v-for="noDaRede in servidor.noDaRede">{{ noDaRede }}</li>
            </ul>
            <p v-else>Nenhuma informação encontrada!</p> -->
          </div>
        </div>

      </div>
    </div>
    <div v-else>
      <h2>Nenhum servidor encontrado</h2>
    </div>
    <router-link to="/servidor/" class="btn btn-primary">Voltar</router-link>

    <remover-servidor v-model="servidor" name="excluir"></remover-servidor>
  </aside>
</template>

<script>
import ServidorService from '@/components/service/servidorService'
import RemoverServidor from '@/components/servidor/components/RemoverServidor'

export default {
  data: function () {
    return {
      servidor: {},
      encontrado: false
    }
  },
  methods: {
    openExcluirServidor: function (servidor) {
      this.servidor = servidor
      this.$modal.show('excluir')
    }
  },
  mounted: function () {
    ServidorService.procurarServidor(this.$route.params.id, servidor => { this.servidor = servidor }, encontrado => { this.encontrado = encontrado })
  },
  components: {
    RemoverServidor
  }
}
</script>