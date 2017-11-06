import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '@/components/Inicio'
import InicioDesenho from '@/components/InicioDesenho'

import Usuario from '@/components/usuario/Usuario'
import UsuarioNovo from '@/components/usuario/Novo'
import UsuarioModificar from '@/components/usuario/Modificar'
import UsuarioInformacoes from '@/components/usuario/Informacoes'
import UsuarioTodos from '@/components/usuario/Todos'

import Servidor from '@/components/servidor/Servidor'
import ServidorNovo from '@/components/servidor/Novo'
import ServidorModificar from '@/components/servidor/Modificar'
import ServidorInformacoes from '@/components/servidor/Informacoes'
import ServidorTodos from '@/components/servidor/Todos'

import UsuarioDaRede from '@/components/usuario_da_rede/UsuarioDaRede'
import UsuarioDaRedeNovo from '@/components/usuario_da_rede/Novo'
import UsuarioDaRedeModificar from '@/components/usuario_da_rede/Modificar'
import UsuarioDaRedeInformacoes from '@/components/usuario_da_rede/Informacoes'
import UsuarioDaRedeTodos from '@/components/usuario_da_rede/Todos'

import NoDaRede from '@/components/no_da_rede/NoDaRede'
import NoDaRedeNovo from '@/components/no_da_rede/Novo'
import NoDaRedeModificar from '@/components/no_da_rede/Modificar'
import NoDaRedeInformacoes from '@/components/no_da_rede/Informacoes'
import NoDaRedeTodos from '@/components/no_da_rede/Todos'

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
        // Router do Inicio
        {
          path: '',
          component: InicioDesenho
        },
        // Router de Usuarios
        {
          path: '/usuario/',
          component: Usuario,
          meta: {
            breadcrumb: 'Usuario'
          },
          children: [
            {
              path: '',
              component: UsuarioTodos
            },
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
            }
          ]
        },
        // Router de Servidores
        {
          path: '/servidor/',
          component: Servidor,
          meta: {
            breadcrumb: 'Servidor'
          },
          children: [
            {
              path: '',
              component: ServidorTodos
            },
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
            }
          ]
        },
        // Router de Usuarios da Rede
        {
          path: '/usuario-da-rede/',
          component: UsuarioDaRede,
          meta: {
            breadcrumb: 'Usuario da Rede'
          },
          children: [
            {
              path: '',
              component: UsuarioDaRedeTodos
            },
            {
              path: '/usuario-da-rede/novo',
              component: UsuarioDaRedeNovo,
              meta: {
                breadcrumb: 'Novo'
              }
            },
            {
              path: '/usuario-da-rede/modificar/:id',
              component: UsuarioDaRedeModificar,
              meta: {
                breadcrumb: 'Modificar'
              }
            },
            {
              path: '/usuario-da-rede/:id',
              component: UsuarioDaRedeInformacoes,
              meta: {
                breadcrumb: 'Informação'
              }
            }
          ]
        },
        // Router de Nos da Rede
        {
          path: '/no-da-rede/',
          component: NoDaRede,
          meta: {
            breadcrumb: 'Nó da Rede'
          },
          children: [
            {
              path: '',
              component: NoDaRedeTodos
            },
            {
              path: '/no-da-rede/novo',
              component: NoDaRedeNovo,
              meta: {
                breadcrumb: 'Novo'
              }
            },
            {
              path: '/no-da-rede/modificar/:id',
              component: NoDaRedeModificar,
              meta: {
                breadcrumb: 'Modificar'
              }
            },
            {
              path: '/no-da-rede/:id',
              component: NoDaRedeInformacoes,
              meta: {
                breadcrumb: 'Informação'
              }
            }
          ]
        }
      ]
    }
  ]
})
