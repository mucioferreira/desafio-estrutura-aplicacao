<template>
  <aside>
    <div v-if="encontrado"> 
      <h1>Informação do usuário</h1>
      <hr>
      <div class="widget-box collapsible">
        <div class="widget-title">
          <a data-toggle="collapse" href="#collapseOne"> 
            <span class="icon"><i class="fa fa-user"></i></span>
            <h5>{{ usuario.nome }}</h5>
          </a> 
          
          <div class="action-buttons">
            <router-link :to="`/usuario/modificar/${usuario.id}`"><i class="fa fa-pencil"></i></router-link>
          </div>
        </div>
        <div id="collapseOne" class="collapse in">
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
        <div class="widget-title">
          <a data-toggle="collapse" href="#collapseTwo"> 
            <span class="icon"><i class="fa fa-sitemap"></i></span>
            <h5>Informação do(a) {{ usuario.nome }} na Rede</h5>
          </a>
        </div>
        <div id="collapseTwo" class="collapse">
          <div class="widget-content">
            <ul v-if="usuario.usuarioDaRede.length">
              <li v-for="rede in usuario.usuarioDaRede">{{rede}}</li>
            </ul>
            <p v-else>Nenhuma informação encontrada!</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Nenhum usuário encontrado</h2>
    </div>
    <router-link to="/usuario/" class="btn btn-primary">Voltar</router-link>
  </aside>
</template>

<script>
import UsuarioService from '@/components/service/usuarioService'

export default {
  data: function () {
    return {
      encontrado: false,
      usuario: null
    }
  },
  mounted: function () {
    UsuarioService.procurarUsuario(this.$route.params.id, usuario => { this.usuario = usuario }, encontrado => { this.encontrado = encontrado })
  }
}
</script>