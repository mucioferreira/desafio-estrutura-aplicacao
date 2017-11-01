<template>
  <aside>
    <div v-if="encontrado">
      <h1>Modificar Servidor</h1>
      <hr>
      <formulario :servidor="servidor" :action="modificarServidor"></formulario>
    </div>
    <div v-else>
      <h2>Nenhum servidor encontrado</h2>
    </div>
  </aside>
</template>

<script>
import ServidorService from '@/components/service/servidor'
import ServidorFormulario from '@/components/servidor/components/Formulario'

export default {
  data: function () {
    return {
      servidor: {},
      encontrado: false
    }
  },
  methods: {
    modificarServidor: function (servidor) {
      ServidorService.put(servidor)
    }
  },
  mounted: function () {
    ServidorService.procurarServidor(this.$route.params.id, servidor => { this.servidor = servidor }, encontrado => { this.encontrado = encontrado })
  },
  components: {
    formulario: ServidorFormulario
  }
}
</script>