<template>
  <section>
    <div id="content-header">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" v-if="crumb.meta.breadcrumb" v-for="(crumb, i) in $breadcrumbs">
          <span v-if="i >= ($breadcrumbs.length - 1)">{{ crumb.meta.breadcrumb }}</span>
          <router-link v-else :to="{ path: crumb.path }">{{ crumb.meta.breadcrumb }}</router-link>
        </li>
      </ol>
    </div>

    <div class="quick-actions_homepage">
      <ul class="quick-actions">
        <li class="bg_lb"> 
          <router-link to="/usuario/novo"><i class="fa fa-user"></i> Novo Usuario</router-link>
        </li>
        <li class="bg_lg "> 
          <router-link to="/servidor/novo"><i class="fa fa-server"></i> Novo Servidor</router-link>
        </li>
        <li class="bg_ly"> 
          <router-link to="/no-da-rede/novo"><i class="fa fa-sitemap"></i> Novo nó na rede</router-link>
        </li>
        <li class="bg_lo"> 
          <router-link to="/usuario-da-rede/novo"><i class="fa fa-users"></i> Novo usuário na rede</router-link>
        </li>
      </ul>
    </div>

    <router-view/>
  </section>
</template>