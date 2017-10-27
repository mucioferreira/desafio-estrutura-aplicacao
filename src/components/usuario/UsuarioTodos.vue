<template>
  <section>
    <li v-for="usuario in usuarios">
      {{ usuario }}
    </li>

    <button class="btn btn-primary" v-if="pagina > 0" v-on:click="anteriorPagina">Anterior</button>
    <button class="btn btn-primary" v-if="pagina < (totalPaginas - 1)" v-on:click="proximaPagina">Proxima</button>
  </section>
</template>

<script>
import UsuarioService from '@/components/service/usuarioService'

export default {
  data: function () {
    return {
      usuarios: [],
      pagina: 0,
      totalPaginas: 0
    }
  },
  methods: {
    carregarUsuarios: function (pagina) {
      var t = this
      UsuarioService.getPagina(pagina).then(
        response => {
          t.usuarios = response.body.data.content
          t.totalPaginas = response.body.data.totalPages
        }
      )
    },
    proximaPagina: function () {
      this.carregarUsuarios((++this.pagina))
    },
    anteriorPagina: function () {
      this.carregarUsuarios((--this.pagina))
    }
  },
  mounted () {
    this.carregarUsuarios(this.pagina)
  }
}
</script>