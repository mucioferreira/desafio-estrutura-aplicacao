import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '@/components/Inicio'

import Usuario from '@/components/usuario/Usuario'
import UsuarioNovo from '@/components/usuario/UsuarioNovo'
import UsuarioModificar from '@/components/usuario/UsuarioModificar'
import UsuarioInformacoes from '@/components/usuario/UsuarioInformacoes'
import UsuarioTodos from '@/components/usuario/UsuarioTodos'

import Servidor from '@/components/servidor/Servidor'
import ServidorNovo from '@/components/servidor/ServidorNovo'
import ServidorModificar from '@/components/servidor/ServidorModificar'
import ServidorInformacoes from '@/components/servidor/ServidorInformacoes'
import ServidorTodos from '@/components/servidor/ServidorTodos'

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
            {
              path: '/usuario/modificar/:id',
              component: UsuarioModificar,
              meta: {
                breadcrumb: 'Modificar'
              }
            },
            {
              path: '/usuario/:id',
              component: UsuarioInformacoes,
              meta: {
                breadcrumb: 'Informação'
              }
            },
            {
              path: '',
              component: UsuarioTodos
            }
          ]
        },
        {
          path: '/servidor/',
          component: Servidor,
          meta: {
            breadcrumb: 'Servidor'
          },
          children: [
            {
              path: '/servidor/novo',
              component: ServidorNovo,
              meta: {
                breadcrumb: 'Novo'
              }
            },
            {
              path: '/servidor/modificar/:id',
              component: ServidorModificar,
              meta: {
                breadcrumb: 'Modificar'
              }
            },
            {
              path: '/servidor/:id',
              component: ServidorInformacoes,
              meta: {
                breadcrumb: 'Informação'
              }
            },
            {
              path: '',
              component: ServidorTodos
            }
          ]
        }
      ]
    }
  ]
})
