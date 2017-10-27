import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '@/components/Inicio'

import Usuario from '@/components/usuario/Usuario'
import UsuarioNovo from '@/components/usuario/UsuarioNovo'
import UsuarioTodos from '@/components/usuario/UsuarioTodos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Inicio,
      meta: {
        breadcrumb: 'Início'
      },
      children: [
        {
          path: '/usuario/',
          component: Usuario,
          meta: {
            breadcrumb: 'Usuario'
          },
          children: [
            {
              path: '/usuario/novo',
              component: UsuarioNovo,
              meta: {
                breadcrumb: 'Novo'
              }
            },
            // {
            //   path: '/usuario/:id',
            //   component: UsuarioPesquisar,
            //   meta: {
            //     breadcrumb: 'Pesquisar'
            //   }
            // },
            {
              path: '',
              component: UsuarioTodos
            }
          ]
        }
      ]
    }
  ]
})
