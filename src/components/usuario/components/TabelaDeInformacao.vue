<template>
  <aside>
  <div class="widget-box collapsible">
    <div class="widget-title">
      <a data-toggle="collapse" href="#collapseDoUsuario"> 
        <span class="icon"><i class="fa fa-user"></i></span>
        <h5>Informação do(a) {{ usuario.nome }}</h5>
      </a> 

      <div class="action-buttons">
        <div v-if="modificar">
          <router-link :to="`/usuario/modificar/${usuario.id}`"><i class="fa fa-pencil"></i></router-link>
          <a v-on:click="openExcluirUsuario(usuario)"> <i class="fa fa-trash"></i> </a>
        </div>
        <div v-else>
          <router-link :to="`/usuario/${usuario.id}`"><i class="fa fa-arrow-right"></i></router-link>
        </div>
      </div>
    </div>
    <div id="collapseDoUsuario" class="collapse" v-bind:class="{ in: aberto }">
      <div class="widget-content">
        <table class="table table-bordered table-invoice no-margin">
          <tbody>
            <tr>
              <td><strong>ID</strong></td>
              <td>{{ usuario.id }}</td>
            </tr>
            <tr>
              <td><strong>Nome:</strong></td>
              <td>{{ usuario.nome }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  <remover-usuario v-model="usuario" name="excluirUsuario"></remover-usuario>

  </aside>
</template>

<script>
import RemoverUsuario from '@/components/usuario/components/Remover'

export default {
  props: ['usuario', 'modificar', 'aberto'],
  methods: {
    openExcluirUsuario: function (usuario) {
      this.usuario = usuario
      this.$modal.show('excluirUsuario')
    }
  },
  components: {
    RemoverUsuario
  }
}
</script>