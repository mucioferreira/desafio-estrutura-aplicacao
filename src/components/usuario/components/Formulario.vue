<template>
  <div class="widget-box">
    <div class="widget-content">
      <form v-on:submit="actionMethod(usuario)" class="form-horizontal" name="basic_validate" id="basic_validate" novalidate="novalidate">
        <div class="control-group">
          <label for="nome" class="control-label">Nome: </label>
          <div class="controls">
            <input id="nome" type="text" name="nome" v-model="usuario.nome" minlength="4">
          </div>
        </div>
        <div class="form-actions">
          <button class="btn btn-success">Salvar</button>
          <router-link to="/usuario/" class="btn btn-primary">Cancelar</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['usuario', 'action'],
  methods: {
    actionMethod: function (usuario) {
      this.action(usuario)
      event.preventDefault()
    }
  }
}
</script>