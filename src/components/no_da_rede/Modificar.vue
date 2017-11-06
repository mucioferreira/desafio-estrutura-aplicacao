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
import ServidorService from '@/components/service/servidor'

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
  mounted: function () {
    NoDaRedeService.procurarNoDaRede(this.$route.params.id, noDaRede => { this.noDaRede = noDaRede }, encontrado => { this.encontrado = encontrado })
  },
  watch: {
    noDaRede: function (noDaRede) {
      if (typeof noDaRede.servidor !== 'object') ServidorService.procurarServidor(noDaRede.servidor, servidor => { noDaRede.servidor = servidor })
      if (typeof noDaRede.proximo !== 'object') NoDaRedeService.procurarNoDaRede(noDaRede.proximo, proximo => { noDaRede.proximo = proximo })
    }
  },
  components: {
    formulario: NoDaRedeFormulario
  }
}
</script>