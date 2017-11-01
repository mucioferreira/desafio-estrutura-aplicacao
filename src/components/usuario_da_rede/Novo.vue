<template>
  <aside>
    <h1>Novo usuário da rede</h1>
    <hr>
    <formulario :usuarioDaRede="usuarioDaRede" :action="adicionarUsuarioDaRede"></formulario>
  </aside>
</template>

<script>
import UsuarioDaRedeService from '@/components/service/usuarioDaRede'
import UsuarioDaRedeFormulario from '@/components/usuario_da_rede/components/Formulario'

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
    }
  },
  components: {
    formulario: UsuarioDaRedeFormulario
  }
}
</script>