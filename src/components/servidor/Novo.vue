<template>
  <aside>
    <h1>Novo Servidor</h1>
    <hr>
    <formulario :servidor="servidor" :action="adicionarServidor"></formulario>
  </aside>
</template>

<script>
import ServidorService from '@/components/service/servidor'
import ServidorFormulario from '@/components/servidor/components/Formulario'

export default {
  data: function () {
    return {
      servidor: {}
    }
  },
  methods: {
    adicionarServidor: function (servidor) {
      ServidorService.post(servidor)
    }
  },
  components: {
    formulario: ServidorFormulario
  }
}
</script>