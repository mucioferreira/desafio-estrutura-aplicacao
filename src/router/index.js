import Vue from 'vue'
import Router from 'vue-router'
import VueBreadcrumbs from 'vue-2-breadcrumbs'
import Inicio from '@/components/Inicio'
import Usuario from '@/components/usuario/Usuario'
import UsuarioNovo from '@/components/usuario/UsuarioNovo'
import UsuarioPesquisar from '@/components/usuario/UsuarioPesquisar'
import UsuarioTodos from '@/components/usuario/UsuarioTodos'

Vue.use(Router)
Vue.use(VueBreadcrumbs)

const Foo = {template: '<div><h2>foo<h2></div>'}
const Bar = {template: '<div><h2>Bar</h2></div>'}

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
              path: '/usuario/:id',
              component: UsuarioPesquisar,
              meta: {
                breadcrumb: 'Pesquisar'
              }
            },
            {
              path: '',
              component: UsuarioTodos,
              meta: {
                breadcrumb: 'Todos'
              }
            }
          ]
        },
        {
          path: 'foo',
          component: Foo,
          meta: {
            breadcrumb: 'foo'
          }
        },
        {
          path: 'bar',
          component: Bar,
          meta: {
            breadcrumb: 'bar'
          }
        }
      ]
    }
  ]
})
