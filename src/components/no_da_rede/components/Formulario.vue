<template>
  <div class="widget-box">
    <div class="widget-content">
      <form v-on:submit="actionMethod(noDaRede)" class="form-horizontal" name="basic_validate" id="basic_validate" novalidate="novalidate">
        <div class="row-fluid">
          <div class="span6" >
            <procurar-servidor @selecionado="selecionarServidor" :selecionar="true"></procurar-servidor>
            <tabela-servidor v-if="noDaRede.servidor.id" :servidor="noDaRede.servidor" :aberto="true" nome="servidorSelecionado"></tabela-servidor>
          </div>
          <div class="span6" >
            <procurar-no @selecionado="selecionarProximo" :selecionar="true"></procurar-no>
            <div v-if="hasProximo" class="widget-box collapsible">
              <div class="widget-title">
                <a data-toggle="collapse" href="#collapseTwo"> 
                  <span class="icon"><i class="fa fa-server"></i></span>
                  <h5>Informação do Nó</h5>
                </a> 
              </div>
              <div id="collapseTwo" class="collapse in">
                <div class="widget-content">
                  <tabela-no :noDaRede="noDaRede.proximo" :aberto="true"></tabela-no>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="control-group">
          <label for="ambienteDaRede" class="control-label">Ambiente: </label>
          <div class="controls">
            <select id="ambienteDaRede" v-model="noDaRede.ambienteDaRede" style="margin-top: 7px; width: 100%;" required>
              <option v-for="(ambiente, nome) in ambientes" v-bind:value="ambiente">{{ nome }}</option>
            </select>
          </div>
        </div>
        <div class="control-group">
          <label for="descricao" class="control-label">Descrição</label>
          <div class="controls">
            <textarea id="descricao" name="descricao" maxlength="255" v-model="noDaRede.descricaoDaRede"></textarea>
          </div>
        </div>
        <div class="form-actions">
          <button class="btn btn-success">Salvar</button>
          <router-link to="/no-da-rede/" class="btn btn-primary">Cancelar</router-link>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import ProcurarServidorComponente from '@/components/servidor/components/Procurar'
import TabelaDeInformacaoDoServidor from '@/components/servidor/components/TabelaDeInformacao'
import ProcurarNoComponente from '@/components/no_da_rede/components/Procurar'
import TabelaDeInformacaoDoNo from '@/components/no_da_rede/components/TabelaDeInformacao'
import AmbienteDaRedeService from '@/components/service/ambiente'

export default {
  props: ['noDaRede', 'action'],
  data: function () {
    return {
      ambientes: null,
      proximoSelecionado: null
    }
  },
  methods: {
    selecionarServidor: function (servidor) {
      this.noDaRede.servidor = servidor
    },
    selecionarProximo: function (proximo) {
      this.noDaRede.proximo = proximo
      if (proximo !== null) this.noDaRede.ambienteDaRede = proximo.ambienteDaRede
    },
    actionMethod: function (noDaRede) {
      this.action(noDaRede)
      event.preventDefault()
    }
  },
  mounted: function () {
    AmbienteDaRedeService.get(ambientes => { this.ambientes = ambientes })
  },
  computed: {
    hasProximo: function () {
      return (typeof this.noDaRede.proximo === 'object') && (this.noDaRede.proximo != null)
    }
  },
  components: {
    procurarServidor: ProcurarServidorComponente,
    tabelaServidor: TabelaDeInformacaoDoServidor,
    procurarNo: ProcurarNoComponente,
    tabelaNo: TabelaDeInformacaoDoNo
  }
}
</script>