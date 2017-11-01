<template>
  <aside>
   <div class="widget-box">
     <div class="action-buttons">
       <div v-if="modificar">
         <router-link :to="`/usuario-da-rede/modificar/${usuarioDaRede.id}`"><i class="fa fa-pencil"></i></router-link>
         <a v-on:click="openExcluirUsuarioDaRede(usuarioDaRede)"><i class="fa fa-trash"></i></a>
       </div>
       <div v-else>
        <router-link :to="`/usuario-da-rede/${usuarioDaRede.id}`"><i class="fa fa-arrow-right"></i></router-link>
       </div>
     </div>
     <div class="widget-content">
       <h4>Descrição</h4>
       <p v-if="usuarioDaRede.descricao">{{ usuarioDaRede.descricao }}</p>
       <p v-else>Nenhuma descrição para esse usuário da rede.</p>
     </div>
   </div>
   <div class="row-fluid">
     <div class="span6">
       <tabela-servidor :servidor="usuarioDaRede.servidor"></tabela-servidor>
     </div>
     <div class="span6">
       <tabela-usuario :usuario="usuarioDaRede.usuario"></tabela-usuario>
     </div>
   </div>

   <remover-usuario-da-rede v-model="usuarioDaRede" name="excluirUsuarioDaRede"></remover-usuario-da-rede>
  </aside>
</template>

<script>
import TabelaDeInformacaoDoUsuario from '@/components/usuario/components/TabelaDeInformacao'
import TabelaDeInformacaoDoServidor from '@/components/servidor/components/TabelaDeInformacao'
import RemoverUsuarioDaRede from '@/components/usuario_da_rede/components/Remover'

export default {
  props: ['usuarioDaRede', 'modificar'],
  methods: {
    openExcluirUsuarioDaRede: function (usuarioDaRede) {
      this.usuarioDaRede = usuarioDaRede
      this.$modal.show('excluirUsuarioDaRede')
    }
  },
  components: {
    tabelaUsuario: TabelaDeInformacaoDoUsuario,
    tabelaServidor: TabelaDeInformacaoDoServidor,
    RemoverUsuarioDaRede
  }
}
</script>