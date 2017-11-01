<template>
  <aside>
    <div v-if="encontrado">
      <h1>Modificar usuário da rede</h1>
      <hr>
      <formulario :usuarioDaRede="usuarioDaRede" :action="modificarUsuarioDaRede"></formulario>
    </div>
    <div v-else>
      <h2>Nenhum servidor encontrado</h2>
    </div>
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
      },
      encontrado: false
    }
  },
  methods: {
    modificarUsuarioDaRede: function (usuarioDaRede) {
      UsuarioDaRedeService.put(usuarioDaRede)
    }
  },
  mounted: function () {
    UsuarioDaRedeService.procurarUsuarioDaRede(this.$route.params.id, usuarioDaRede => { this.usuarioDaRede = usuarioDaRede }, encontrado => { this.encontrado = encontrado })
  },
  components: {
    formulario: UsuarioDaRedeFormulario
  }
}
</script>