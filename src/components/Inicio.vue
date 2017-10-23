<template>
  <section>
    <div id="content-header">
      <div id="breadcrumb"> 
        <router-link to="/" class="tip-bottom"><i class="fa fa-home"></i> Início</a></router-link>
      </div>
    </div>
    <div class="quick-actions_homepage">
      
      <ul class="quick-actions">
        <li class="bg_lb"> 
          <router-link to="/"><i class="fa fa-user"></i> Novo Usuario</router-link>
        </li>
        <li class="bg_lg "> 
          <router-link to="/"><i class="fa fa-server"></i> Novo Servidor</router-link>
        </li>
        <li class="bg_ly"> 
          <router-link to="/"><i class="fa fa-sitemap"></i> Novo nó na rede</router-link>
        </li>
        <li class="bg_lo"> 
          <router-link to="/"><i class="fa fa-users"></i> Novo usuário na rede</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>