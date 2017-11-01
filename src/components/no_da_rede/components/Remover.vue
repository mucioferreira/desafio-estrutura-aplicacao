<template>
  <modal classes="modal-box" width="300" height="auto" v-bind:name="name">
    <div class="modal-header">
      <h3 class="modal-title">Confirmar exclusão</h3>
    </div>
    <div class="modal-body">
      Tem certeza que deseja deletar esse nó da rede <strong>(ID: {{ value.id }})</strong>?
    </div>
    <div class="modal-footer">
      <button v-on:click="closeExcluir()" class="btn btn-primary">
        Não
      </button>
      <button v-on:click="excluirNoDaRede(value)" class="btn">
        Sim
      </button>
    </div>
  </modal>
</template>

<script>
import NoDaRedeService from '@/components/service/noDaRede'

export default {
  props: ['value', 'name'],
  methods: {
    excluirNoDaRede: function (noDaRede) {
      NoDaRedeService.delete(noDaRede)
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