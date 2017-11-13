<template>
  <aside>
    <div v-if="encontrado">
      <h1>Modificar nó da rede</h1>
      <hr>
      <formulario :noDaRede="noDaRede" :action="modificarNoDaRede"></formulario>
    </div>
    <div v-else>
      <h2>Nenhum nó encontrado.</h2>
    </div>
  </aside>
</template>

<script>
import NoDaRedeService from '@/components/service/noDaRede'
import NoDaRedeFormulario from '@/components/no_da_rede/components/Formulario'

export default {
  data: function () {
    return {
      noDaRede: {},
      encontrado: false
    }
  },
  methods: {
    modificarNoDaRede: function (noDaRede) {
      NoDaRedeService.put(noDaRede)
    }
  },
  watch: {
    noDaRede: function (noDaRede) {
      if (noDaRede.proximo !== null) NoDaRedeService.procurarNoDaRede(noDaRede.proximo, proximo => { noDaRede.proximo = proximo })
    }
  },
  beforeCreate: function () {
    NoDaRedeService.procurarNoDaRede(this.$route.params.id, noDaRede => { this.noDaRede = noDaRede }, encontrado => { this.encontrado = encontrado })
  },
  components: {
    formulario: NoDaRedeFormulario
  }
}
</script>