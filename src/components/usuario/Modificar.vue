<template>
  <aside>
    <div v-if="encontrado">
      <h1>Modificar Usuário</h1>
      <hr>
      <formulario :usuario="usuario" :action="modificarUsuario"></formulario>
    </div>
    <div v-else>
      <h2>Nenhum usuário encontrado</h2>
    </div>
  </aside>
</template>

<script>
import UsuarioService from '@/components/service/usuario'
import UsuarioFormulario from '@/components/usuario/components/Formulario'

export default {
  data: function () {
    return {
      encontrado: false,
      usuario: null
    }
  },
  methods: {
    modificarUsuario: function (usuario) {
      UsuarioService.put(usuario)
    }
  },
  mounted: function () {
    UsuarioService.procurarUsuario(this.$route.params.id, usuario => { this.usuario = usuario }, encontrado => { this.encontrado = encontrado })
  },
  components: {
    formulario: UsuarioFormulario
  }
}
</script>