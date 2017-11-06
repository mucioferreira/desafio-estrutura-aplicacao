<template>
  <aside>
    <a v-if="noDaRede.proximo" :href="`#/no-da-rede/${noDaRede.proximo}`" class="btn btn-info" style="float: right; margin-bottom: 15px;">Proximo nó</a>
    <div class="widget-box">
     <div class="action-buttons">
       <div v-if="modificar">
         <router-link :to="`/no-da-rede/modificar/${noDaRede.id}`"><i class="fa fa-pencil"></i></router-link>
         <a v-on:click="openExcluirNoDaRede(noDaRede)"><i class="fa fa-trash"></i></a>
       </div>
       <div v-else>
        <router-link :to="`/no-da-rede/${noDaRede.id}`"><i class="fa fa-arrow-right"></i></router-link>
       </div>
     </div>
      <div class="widget-content">
         <h4>Descrição</h4>
         <p v-if="noDaRede.descricaoDaRede">{{ noDaRede.descricaoDaRede }}</p>
         <p v-else>Nenhuma descrição para esse nó da rede.</p>
       </div>
    </div>
    <tabela-servidor :servidor="noDaRede.servidor"></tabela-servidor>
    <div class="widget-box">
      <div class="widget-content">
         <h4>Ambiente</h4>
         <p>{{ noDaRede.nomeAmbienteDaRede }}</p>
       </div>
    </div>

    <remover-no-da-rede v-model="noDaRede" name="excluirNoDaRede"></remover-no-da-rede>
  </aside>
</template>

<script>
import TabelaDeInformacaoDoServidor from '@/components/servidor/components/TabelaDeInformacao'
import RemoverNoDaRede from '@/components/no_da_rede/components/Remover'
import ServidorService from '@/components/service/servidor'

export default {
  props: ['noDaRede', 'modificar'],
  methods: {
    openExcluirNoDaRede: function (noDaRede) {
      this.noDaRede = noDaRede
      this.$modal.show('excluirNoDaRede')
    }
  },
  watch: {
    noDaRede: function (noDaRede) {
      if (typeof noDaRede.servidor !== 'object') ServidorService.procurarServidor(noDaRede.servidor, servidor => { noDaRede.servidor = servidor })
    }
  },
  components: {
    tabelaServidor: TabelaDeInformacaoDoServidor,
    RemoverNoDaRede
  }
}
</script>