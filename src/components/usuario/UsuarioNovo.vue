<template>
  <aside>
    <h1>Novo Usuário</h1>
    <hr>
    <div class="widget-box">
      <div class="widget-content">
        <form v-on:submit="search" class="form-horizontal" name="basic_validate" id="basic_validate" novalidate="novalidate">
          <div class="control-group">
            <label for="nome" class="control-label">Nome: </label>
            <div class="controls">
              <input id="nome" type="text" name="nome" v-model="nome" minlength="4">
            </div>
          </div>
          <div class="form-actions">
            <button class="btn btn-success">Adicionar</button>
          </div>
        </form>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data: function () {
    return {
      nome: '',
      response: null
    }
  },
  methods: {
    search: function (miniToastr) {
      var t = this
      this.$http.post('http://localhost:8090/api/usuario', {nome: this.nome}).then(
        response => {
          t.nome = ''
          t.sucesso({title: 'Sucesso!', message: response.body.data.nome + ' adicionado com sucesso!'})
        },
        error => {
          error.data.errors.map(erro =>
            t.erro({title: 'Erro!', message: erro})
          )
        })
      event.preventDefault()
    }
  },
  notifications: {
    sucesso: {
      type: 'success'
    },
    erro: {
      type: 'error'
    }
  }
}
</script>