<template>
  <aside>
    <div v-if="encontrado">
      <h1>Informação do servidor</h1>
      <hr>
      <tabela-servidor :servidor="servidor" :modificar="true" :aberto="true"></tabela-servidor>
    </div>
    </div>
    <div v-else>
      <h2>Nenhum servidor encontrado</h2>
    </div>
    <router-link to="/servidor/" class="btn btn-primary">Voltar</router-link>
  </aside>
</template>

<script>
import ServidorService from '@/components/service/servidor'
import TabelaDeInformacaoDoServidor from '@/components/servidor/components/TabelaDeInformacao'

export default {
  data: function () {
    return {
      servidor: {},
      encontrado: false
    }
  },
  mounted: function () {
    ServidorService.procurarServidor(this.$route.params.id, servidor => { this.servidor = servidor }, encontrado => { this.encontrado = encontrado })
  },
  components: {
    tabelaServidor: TabelaDeInformacaoDoServidor
  }
}
</script>