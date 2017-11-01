<template>
  <aside>
    <div class="widget-box collapsible">
        <div class="widget-title">
          <a data-toggle="collapse" href="#tabelaDoServidor"> 
            <span class="icon"><i class="fa fa-server"></i></span>
            <h5>Informação do servidor | {{ servidor.nome }}</h5>
          </a> 

          <div class="action-buttons">
            <div v-if="modificar">
              <router-link :to="`/servidor/modificar/${servidor.id}`"><i class="fa fa-pencil"></i></router-link>
              <a v-on:click="openExcluirServidor(servidor)"> <i class="fa fa-trash"></i> </a>
            </div>
            <div v-else>
              <router-link :to="`/servidor/${servidor.id}`"><i class="fa fa-arrow-right"></i></router-link>
            </div>
          </div>
        </div>
        <div id="tabelaDoServidor" class="collapse" v-bind:class="{ in: aberto }">
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
      </div>

    <remover-servidor v-model="servidor" name="excluirServidor"></remover-servidor>
  </aside>
</template>

<script>
import RemoverServidor from '@/components/servidor/components/Remover'

export default {
  props: ['servidor', 'modificar', 'aberto'],
  methods: {
    openExcluirServidor: function (servidor) {
      this.servidor = servidor
      this.$modal.show('excluirServidor')
    }
  },
  components: {
    RemoverServidor
  }
}
</script>