<template>
  <aside>
    <div v-if="encontrado">
      <h1>Informação do usuário da rede</h1>
      <hr>
        <tabela-usuario :usuario="usuarioDaRede.usuario"></tabela-usuario>
        <tabela-servidor :servidor="usuarioDaRede.servidor" ></tabela-servidor>
        <div class="widget-box">
          <div class="widget-content">
            <h4>Descrição</h4>
            <p v-if="usuarioDaRede.descricao">{{ usuarioDaRede.descricao }}</p>
            <p v-else>Nenhuma descrição para esse usuário da rede</p>
          </div>
        </div>
    </div>
    <div v-else>Nenhum usuário da rede encontrado.</div>

    <router-link to="/usuario-da-rede/" class="btn btn-primary">Voltar</router-link>
  </aside>
</template>

<script>
import UsuarioDaRedeService from '@/components/service/usuarioDaRede'
import TabelaDeInformacaoDoUsuario from '@/components/usuario/components/TabelaDeInformacao'
import TabelaDeInformacaoDoServidor from '@/components/servidor/components/TabelaDeInformacao'

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
    tabelaUsuario: TabelaDeInformacaoDoUsuario,
    tabelaServidor: TabelaDeInformacaoDoServidor
  }
}
</script>