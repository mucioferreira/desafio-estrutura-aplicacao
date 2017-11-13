<template>
  <aside>
    <div class="widget-box collapsible">
      <div class="widget-title">
        <a data-toggle="collapse" href="#collapseTwo"> 
          <span class="icon"><i class="fa fa-server"></i></span>
            <h5>Informação do Nó</h5>
        </a> 
        
        <div class="action-buttons">
          <div v-if="modificar">
            <router-link :to="`/no-da-rede/modificar/${noDaRede.id}`"><i class="fa fa-pencil"></i></router-link>
            <a v-on:click="openExcluirNoDaRede(noDaRede)"><i class="fa fa-trash"></i></a>
          </div>
          <div v-else>
            <router-link :to="`/no-da-rede/${noDaRede.id}`"><i class="fa fa-arrow-right"></i></router-link>
            </div>
        </div>
      </div>
      <div id="collapseTwo" class="collapse" v-bind:class="{ in: aberto }">
        <div class="widget-content">
          <a v-if="noDaRede.proximo" :href="`#/no-da-rede/${linkProximo}`" class="btn btn-info" style="float: right; margin-bottom: 15px;">Proximo nó</a>
          <div class="widget-box">
            <div class="widget-content">
               <h4>Descrição</h4>
               <p v-if="noDaRede.descricaoDaRede">{{ noDaRede.descricaoDaRede }}</p>
               <p v-else>Nenhuma descrição para esse nó da rede.</p>
             </div>
          </div>
          <tabela-servidor :servidor="noDaRede.servidor" nome="servidorSelecionado"></tabela-servidor>
          <div class="widget-box">
            <div class="widget-content">
               <h4>Ambiente</h4>
               <p>{{ noDaRede.nomeAmbienteDaRede }}</p>
             </div>
          </div>
        </div>
      </div>
    </div>

    <remover-no-da-rede v-model="noDaRede" name="excluirNoDaRede"></remover-no-da-rede>
  </aside>
</template>

<script>
import TabelaDeInformacaoDoServidor from '@/components/servidor/components/TabelaDeInformacao'
import RemoverNoDaRede from '@/components/no_da_rede/components/Remover'

export default {
  props: ['noDaRede', 'modificar', 'aberto'],
  methods: {
    openExcluirNoDaRede: function (noDaRede) {
      this.noDaRede = noDaRede
      this.$modal.show('excluirNoDaRede')
    }
  },
  computed: {
    linkProximo: function () {
      if (typeof this.noDaRede.proximo !== 'object') return this.noDaRede.proximo
      else return this.noDaRede.proximo.id
    }
  },
  components: {
    tabelaServidor: TabelaDeInformacaoDoServidor,
    RemoverNoDaRede
  }
}
</script>