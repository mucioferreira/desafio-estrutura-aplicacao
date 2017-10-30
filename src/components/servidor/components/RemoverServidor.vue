<template>
  <modal classes="modal-box" width="300" height="auto" v-bind:name="name">
    <div class="modal-header">
      <h3 class="modal-title">Confirmar exclusão</h3>
    </div>
    <div class="modal-body">
      Tem certeza que deseja deletar o servidor: <strong>{{ value.nome }}</strong>?
    </div>
    <div class="modal-footer">
      <button v-on:click="closeExcluirServidor()" class="btn btn-primary">
        Não
      </button>
      <button v-on:click="excluirServidor(value)" class="btn">
        Sim
      </button>
    </div>
  </modal>
</template>

<script>
import ServidorService from '@/components/service/servidorService'

export default {
  props: ['value', 'name'],
  methods: {
    excluirServidor: function (servidor) {
      ServidorService.delete(servidor)
      this.closeExcluirServidor()
      event.preventDefault()
    },
    closeExcluirServidor: function () {
      this.$modal.hide(this.name)
    },
    openExcluirServidor: function () {
      this.$modal.show(this.name)
    }
  }
}
</script>