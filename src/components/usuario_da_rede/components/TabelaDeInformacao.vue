<template>
  <aside>
    <div v-if="usuarioDaRede.id" class="widget-box collapsible">
      <div class="widget-title">
        <a data-toggle="collapse" href="#collapseThree"> 
          <span class="icon"><i class="fa fa-server"></i></span>
            <h5>Informação do usuário da Rede</h5>
        </a> 

        <div class="action-buttons">
          <div v-if="modificar">
            <router-link :to="`/usuario-da-rede/modificar/${usuarioDaRede.id}`"><i class="fa fa-pencil"></i></router-link>
            <a v-on:click="openExcluirUsuarioDaRede(usuarioDaRede)"><i class="fa fa-trash"></i></a>
          </div>
          <div v-else>
            <router-link :to="`/usuario-da-rede/${usuarioDaRede.id}`"><i class="fa fa-arrow-right"></i></router-link>
          </div>
        </div>

      </div>
      <div id="collapseThree" class="collapse" v-bind:class="{ in: aberto }">
        <div class="widget-content">
          <div class="widget-box">
           <div class="widget-content">
             <h4>Descrição</h4>
             <p v-if="usuarioDaRede.descricao">{{ usuarioDaRede.descricao }}</p>
             <p v-else>Nenhuma descrição para esse usuário da rede.</p>
           </div>
         </div>
         <div class="row-fluid">
           <div class="span6">
            <div class="widget-box collapsible">
              <div class="widget-title">
                <a data-toggle="collapse" href="#collapseTwo"> 
                  <span class="icon"><i class="fa fa-server"></i></span>
                  <h5>Informação do Nó</h5>
                </a> 
              </div>
              <div id="collapseTwo" class="collapse">
                <div class="widget-content">
                  <tabela-no :noDaRede="usuarioDaRede.noDaRede" :aberto="true"></tabela-no>
                </div>
              </div>
            </div>
           </div>
           <div class="span6">
             <tabela-usuario :usuario="usuarioDaRede.usuario"></tabela-usuario>
           </div>
         </div>
        </div>
      </div>
    </div>
   <remover-usuario-da-rede v-model="usuarioDaRede" name="excluirUsuarioDaRede"></remover-usuario-da-rede>
  </aside>
</template>

<script>
import TabelaDeInformacaoDoUsuario from '@/components/usuario/components/TabelaDeInformacao'
import RemoverUsuarioDaRede from '@/components/usuario_da_rede/components/Remover'
import TabelaDeInformacaoDoNo from '@/components/no_da_rede/components/TabelaDeInformacao'

export default {
  props: ['usuarioDaRede', 'modificar', 'aberto'],
  methods: {
    openExcluirUsuarioDaRede: function (usuarioDaRede) {
      this.usuarioDaRede = usuarioDaRede
      this.$modal.show('excluirUsuarioDaRede')
    }
  },
  components: {
    tabelaNo: TabelaDeInformacaoDoNo,
    tabelaUsuario: TabelaDeInformacaoDoUsuario,
    RemoverUsuarioDaRede
  }
}
</script>