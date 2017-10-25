<template>
        <div class="widget-box">
          <div class="widget-content">
            <form class="form-horizontal" method="post" action="#" name="basic_validate" id="basic_validate" novalidate="novalidate">
              <div class="control-group">
                <label for="nome" class="control-label">Nome: </label>
                <div class="controls">
                  <input id="nome" type="text" name="required" minlength="4">
                </div>
              </div>
              <div class="form-actions">
                <input type="submit" value="Adicionar" class="btn btn-success">
              </div>
            </form>
          </div>
        </div>
</template>
