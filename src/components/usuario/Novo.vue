<template>
  <aside>
    <h1>Novo Usuário</h1>
    <hr>
    <formulario :usuario="usuario" :action="adicionarUsuario"></formulario>
  </aside>
</template>

<script>
import UsuarioService from '@/components/service/usuario'
import UsuarioFormulario from '@/components/usuario/components/Formulario'

export default {
  data: function () {
    return {
      usuario: {}
    }
  },
  methods: {
    adicionarUsuario: function (usuario) {
      UsuarioService.post(usuario)
    }
  },
  components: {
    formulario: UsuarioFormulario
  }
}
</script>