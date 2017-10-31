<template>
  <modal classes="modal-box" width="300" height="auto" v-bind:name="name">
    <div class="modal-header">
      <h3 class="modal-title">Confirmar exclusão</h3>
    </div>
    <div class="modal-body">
      Tem certeza que deseja deletar o usuário: <strong>{{ value.nome }}</strong>?
    </div>
    <div class="modal-footer">
      <button v-on:click="closeExcluir()" class="btn btn-primary">
        Não
      </button>
      <button v-on:click="excluirUsuario(value)" class="btn">
        Sim
      </button>
    </div>
  </modal>
</template>

<script>
import UsuarioService from '@/components/service/usuario'

export default {
  props: ['value', 'name'],
  methods: {
    excluirUsuario: function (usuario) {
      UsuarioService.delete(usuario)
      this.closeExcluir()
      event.preventDefault()
    },
    closeExcluir: function () {
      this.$modal.hide(this.name)
    },
    openExcluir: function () {
      this.$modal.show(this.name)
    }
  }
}
</script>