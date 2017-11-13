<template>
  <div class="widget-box">
    <div class="widget-content">
      <form v-on:submit="actionMethod(usuarioDaRede)" class="form-horizontal" name="basic_validate" id="basic_validate" novalidate="novalidate">
        
        <div class="row-fluid">
          <div class="span6">
            <procurar-no @selecionado="selecionarNoDaRede" :selecionar="true" :nenhum="true"></procurar-no>
            <tabela-no v-if="usuarioDaRede.noDaRede" :noDaRede="usuarioDaRede.noDaRede" :aberto="true"></tabela-no>
          </div>
          <div class="span6">
            <procurar-usuario @selecionado="selecionarUsuario" :selecionar="true"></procurar-usuario>
            <tabela-usuario v-if="usuarioDaRede.usuario.id" :usuario="usuarioDaRede.usuario" :aberto="true"></tabela-usuario>
          </div>
        </div>
        <div class="control-group">
          <label for="descricao" class="control-label">Descrição</label>
          <div class="controls">
            <textarea id="descricao" name="descricao" maxlength="255" v-model="usuarioDaRede.descricao"></textarea>
          </div>
        </div>
        <div class="form-actions">
          <button class="btn btn-success">Salvar</button>
          <router-link to="/usuario-da-rede/" class="btn btn-primary">Cancelar</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ProcurarNoDaRedeComponente from '@/components/no_da_rede/components/Procurar'
import ProcurarUsuarioComponente from '@/components/usuario/components/Procurar'
import TabelaDeInformacaoDoUsuario from '@/components/usuario/components/TabelaDeInformacao'
import TabelaDeInformacaoDoNo from '@/components/no_da_rede/components/TabelaDeInformacao'

export default {
  props: ['usuarioDaRede', 'action'],
  methods: {
    selecionarNoDaRede: function (noDaRede) {
      this.usuarioDaRede.noDaRede = noDaRede
    },
    selecionarUsuario: function (usuario) {
      this.usuarioDaRede.usuario = usuario
    },
    actionMethod: function (usuarioDaRede) {
      this.action(usuarioDaRede)
      event.preventDefault()
    }
  },
  computed: {
    hasProximo: function () {
      return (typeof this.usuarioDaRede.noDaRede === 'object') && (this.usuarioDaRede.noDaRede != null)
    }
  },
  components: {
    procurarNo: ProcurarNoDaRedeComponente,
    procurarUsuario: ProcurarUsuarioComponente,
    tabelaUsuario: TabelaDeInformacaoDoUsuario,
    tabelaNo: TabelaDeInformacaoDoNo
  }
}
</script>