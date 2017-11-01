<template>
  <aside>
    <h1>Novo nó da rede</h1>
    <hr>
    <formulario :noDaRede="noDaRede" :action="adicionarNoDaRede"></formulario>
  </aside>
</template>

<script>
import NoDaRedeService from '@/components/service/noDaRede'
import NoDaRedeFormulario from '@/components/no_da_rede/components/Formulario'

export default {
  data: function () {
    return {
      noDaRede: {
        servidor: {},
        proximoNo: null
      }
    }
  },
  methods: {
    adicionarNoDaRede: function (noDaRede) {
      NoDaRedeService.post(noDaRede)
    }
  },
  components: {
    formulario: NoDaRedeFormulario
  }
}
</script>