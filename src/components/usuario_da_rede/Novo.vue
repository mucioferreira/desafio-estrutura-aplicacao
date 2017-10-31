<template>
  <aside>
    <h1>Novo usuário da rede</h1>
    <hr>
    <div class="widget-box">
      <div class="widget-content">
        <form v-on:submit="adicionarUsuarioDaRede(usuarioDaRede)" class="form-horizontal" name="basic_validate" id="basic_validate" novalidate="novalidate">
          <procurar-servidor @selecionado="selecionarServidor"></procurar-servidor>
          <procurar-usuario @selecionado="selecionarUsuario"></procurar-usuario>
          <div class="control-group">
            <label for="descricao" class="control-label">Descrição</label>
            <div class="controls">
              <textarea id="descricao" name="descricao" maxlength="255" v-model="usuarioDaRede.descricao"></textarea>
            </div>
          </div>
          <div class="form-actions">
            <button class="btn btn-success">Adicionar</button>
            <router-link to="/usuario-da-rede/" class="btn btn-primary">Voltar</router-link>
          </div>
        </form>
      </div>
    </div>
  </aside>
</template>

<script>
import UsuarioDaRedeService from '@/components/service/usuarioDaRede'
import ProcurarServidorComponente from '@/components/servidor/components/Procurar'
import ProcurarUsuarioComponente from '@/components/usuario/components/Procurar'

export default {
  data: function () {
    return {
      usuarioDaRede: {
        servidor: {},
        usuario: {}
      }
    }
  },
  methods: {
    adicionarUsuarioDaRede: function (usuarioDaRede) {
      UsuarioDaRedeService.post(usuarioDaRede)
      event.preventDefault()
    },
    selecionarServidor: function (servidor) {
      this.usuarioDaRede.servidor = servidor
    },
    selecionarUsuario: function (usuario) {
      this.usuarioDaRede.usuario = usuario
    }
  },
  components: {
    procurarServidor: ProcurarServidorComponente,
    procurarUsuario: ProcurarUsuarioComponente
  }
}
</script>