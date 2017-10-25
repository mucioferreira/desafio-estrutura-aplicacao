import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '@/components/Inicio'

import Usuario from '@/components/usuario/Usuario'
import UsuarioNovo from '@/components/usuario/UsuarioNovo'
import UsuarioTodos from '@/components/usuario/UsuarioTodos'

import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'// https://github.com/se-panfilov/mini-toastr

Vue.use(Router)

VueNotifications.config.timeout = 4000

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}
miniToastr.init({types: toastTypes})

function toast ({title, message, type, timeout, cb}) {
  return miniToastr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)

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
