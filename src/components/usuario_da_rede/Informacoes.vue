<template>
  <aside>
    <div v-if="encontrado">
      <h1>Informação do usuário da rede</h1>
      <hr>
      <tabela-usuario-da-rede :usuarioDaRede="usuarioDaRede" :modificar="true"></tabela-usuario-da-rede>
    </div>
    <div v-else>Nenhum usuário da rede encontrado.</div>
    <router-link to="/usuario-da-rede/" class="btn btn-primary">Voltar</router-link>
  </aside>
</template>

<script>
import UsuarioDaRedeService from '@/components/service/usuarioDaRede'
import TabelaDeInformacaoDoUsuarioDaRede from '@/components/usuario_da_rede/components/TabelaDeInformacao'

export default {
  data: function () {
    return {
      usuarioDaRede: {},
      encontrado: false
    }
  },
  created: function () {
    UsuarioDaRedeService.procurarUsuarioDaRede(this.$route.params.id, usuarioDaRede => { this.usuarioDaRede = usuarioDaRede }, encontrado => { this.encontrado = encontrado })
  },
  components: {
    tabelaUsuarioDaRede: TabelaDeInformacaoDoUsuarioDaRede
  }
}
</script>