<template>
  <aside>
    <div v-if="encontrado">
      <h1>Informação do Nó da Rede</h1>
      <hr>
      <tabela-no-da-rede :noDaRede="noDaRede" :modificar="true" :aberto="true"></tabela-no-da-rede>
    </div>
    <div v-else>Nenhum usuário da rede encontrado.</div>
    <router-link to="/no-da-rede/" class="btn btn-primary">Voltar</router-link>
  </aside>
</template>

<script>
import NoDaRedeService from '@/components/service/noDaRede'
import TabelaDeInformacaoDoNoDaRede from '@/components/no_da_rede/components/TabelaDeInformacao'

export default {
  data: function () {
    return {
      noDaRede: {},
      encontrado: false
    }
  },
  methods: {
    carregarDados: function () {
      NoDaRedeService.procurarNoDaRede(this.$route.params.id, noDaRede => { this.noDaRede = noDaRede }, encontrado => { this.encontrado = encontrado })
    }
  },
  created: function () {
    this.carregarDados()
  },
  watch: {
    '$route': function () {
      this.carregarDados()
    }
  },
  components: {
    tabelaNoDaRede: TabelaDeInformacaoDoNoDaRede
  }
}
</script>