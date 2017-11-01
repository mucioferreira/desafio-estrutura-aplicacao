<template>
  <div class="widget-box">
    <div class="widget-content">
      <form v-on:submit="actionMethod(usuarioDaRede)" class="form-horizontal" name="basic_validate" id="basic_validate" novalidate="novalidate">
        
        <div class="row-fluid">
          <div class="span6" >
            <procurar-servidor @selecionado="selecionarServidor" :selecionar="true"></procurar-servidor>
            <tabela-servidor v-if="usuarioDaRede.servidor.id" :servidor="usuarioDaRede.servidor" :aberto="true"></tabela-servidor>
          </div>
          <div class="span6" >
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
          <router-link to="/usuario-da-rede/" class="btn btn-primary">Voltar</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ProcurarServidorComponente from '@/components/servidor/components/Procurar'
import ProcurarUsuarioComponente from '@/components/usuario/components/Procurar'
import TabelaDeInformacaoDoUsuario from '@/components/usuario/components/TabelaDeInformacao'
import TabelaDeInformacaoDoServidor from '@/components/servidor/components/TabelaDeInformacao'

export default {
  props: ['usuarioDaRede', 'action'],
  methods: {
    selecionarServidor: function (servidor) {
      this.usuarioDaRede.servidor = servidor
    },
    selecionarUsuario: function (usuario) {
      this.usuarioDaRede.usuario = usuario
    },
    actionMethod: function (usuarioDaRede) {
      this.action(usuarioDaRede)
      event.preventDefault()
    }
  },
  components: {
    procurarServidor: ProcurarServidorComponente,
    procurarUsuario: ProcurarUsuarioComponente,
    tabelaUsuario: TabelaDeInformacaoDoUsuario,
    tabelaServidor: TabelaDeInformacaoDoServidor
  }
}
</script>