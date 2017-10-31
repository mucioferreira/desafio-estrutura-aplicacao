<template>
  <aside>
    <div v-if="encontrado"> 
      <h1>Informação do usuário</h1>
      <hr>
      <tabela-usuario :usuario="usuario" :modificar="true" :aberto="true"></tabela-usuario>
    </div>
    <div v-else>
      <h2>Nenhum usuário encontrado.</h2>
    </div>
    <router-link to="/usuario/" class="btn btn-primary">Voltar</router-link>
  </aside>
</template>

<script>
import UsuarioService from '@/components/service/usuario'
import TabelaDeInformacaoDoUsuario from '@/components/usuario/components/TabelaDeInformacao'

export default {
  data: function () {
    return {
      usuario: {},
      encontrado: false
    }
  },
  mounted: function () {
    UsuarioService.procurarUsuario(this.$route.params.id, usuario => { this.usuario = usuario }, encontrado => { this.encontrado = encontrado })
  },
  components: {
    tabelaUsuario: TabelaDeInformacaoDoUsuario
  }
}
</script>