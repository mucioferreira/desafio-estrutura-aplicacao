<template>
  <aside>
    <div id="grafico" class="grafico">
      <div class="legenda">
        <ul>
          <li>
            <h4>Ambientes - <a v-on:click="selecionarAmbiente(null)"><small>Todos Ambientes</small></a></h4>
          </li>
          <li v-for="(ambiente, nome) in ambientes">
            <a v-on:click="selecionarAmbiente(ambiente)">
              <span :class="['box-legenda', ambiente]"></span>
              <span class="legenda-label">{{ nome }}</span>
            </a>
          </li>
        </ul>
        <hr>
        <p><span class="box-legenda USUARIO"></span> Usuário da rede</p>
        <p>Qtd. de nós: {{ nosDaRede.length }}</p>
        <p>Qtd. de usuários: {{ usuariosDaRede.length }}</p>
      </div>

      <grafico :net-nodes="nodes" :net-links="links" :options="options" @node-click="nodeClick" @link-click="linkClick"></grafico>

      <div class="informacao" v-if="informacao" :style="{ position: 'absolute', left: informacoes.x, top: informacoes.y }">
        <a class="close-button" v-on:click="fecharInformacao()"><i class="fa fa-close"></i></a>
        <tabela-servidor v-if="informacoes.servidor" :servidor="informacoes.servidor" :aberto="informacoes.aberto" nome="servidorSelecionado"></tabela-servidor>
        <tabela-no v-if="informacoes.noDaRede" :noDaRede="informacoes.noDaRede" :aberto="informacoes.aberto"></tabela-no>
        <tabela-usuario v-if="informacoes.usuario" :usuario="informacoes.usuario" :aberto="informacoes.aberto"></tabela-usuario>
        <tabela-usuario-da-rede v-if="informacoes.usuarioDaRede" :usuarioDaRede="informacoes.usuarioDaRede" :aberto="informacoes.aberto"></tabela-usuario-da-rede>
      </div>
      
    </div>
  </aside>
</template>

<script>
import D3Network from 'vue-d3-network'
import NoDaRedeService from '@/components/service/noDaRede'
import AmbienteDaRedeService from '@/components/service/ambiente'
import UsuarioDaRedeService from '@/components/service/usuarioDaRede'
import TabelaDeInformacaoServidor from '@/components/servidor/components/TabelaDeInformacao'
import TabelaDeInformacaoNoDaRede from '@/components/no_da_rede/components/TabelaDeInformacao'
import TabelaDeInformacaoDoUsuario from '@/components/usuario/components/TabelaDeInformacao'
import TabelaDeInformacaoDoUsuarioDaRede from '@/components/usuario_da_rede/components/TabelaDeInformacao'

export default {
  data: function () {
    return {
      nosDaRede: [],
      usuariosDaRede: [],
      ambientes: {},
      ambienteSelecionado: null,
      informacoes: null
    }
  },
  methods: {
    selecionarAmbiente: function (ambienteSelecionado) {
      this.ambienteSelecionado = ambienteSelecionado
    },
    fecharInformacao: function () {
      this.informacoes = null
    },
    getUsuarioId: function (id) {
      return 'user' + id
    }
  },
  watch: {
    ambienteSelecionado: function (ambienteSelecionado) {
      console.log(ambienteSelecionado)
    }
  },
  computed: {
    informacao: function () {
      return this.informacoes
    },
    options: function () {
      return {
        force: 3000,
        nodeSize: 10,
        nodeLabels: true,
        canvas: false
      }
    },
    nodes: function () {
      var t = this
      var nodes = []
      this.nosDaRede.forEach(function (noDaRede) {
        var no = { id: noDaRede.id, name: noDaRede.servidor.nome, _cssClass: noDaRede.ambienteDaRede, no: noDaRede }
        nodes.push(no)
      })
      this.usuariosDaRede.forEach(function (usuarioDaRede) {
        var usuario = { id: t.getUsuarioId(usuarioDaRede.id), name: usuarioDaRede.usuario.nome, _cssClass: 'USUARIO', usuarioDaRede: usuarioDaRede }
        nodes.push(usuario)
      })
      return nodes
    },
    links: function () {
      var t = this
      var links = []
      this.nosDaRede.forEach(noDaRede => { if (noDaRede.proximo != null) links.push({ sid: noDaRede.id, tid: noDaRede.proximo, no: noDaRede }) })
      this.usuariosDaRede.forEach(usuarioDaRede => { links.push({ sid: t.getUsuarioId(usuarioDaRede.id), tid: usuarioDaRede.noDaRede.id, usuarioDaRede: usuarioDaRede }) })
      return links
    },
    nodeClick: function () {
      var t = this
      return function (event, nodeObject) {
        t.informacoes = {
          servidor: (typeof nodeObject.no === 'object') ? nodeObject.no.servidor : null,
          usuario: (typeof nodeObject.usuarioDaRede === 'object') ? nodeObject.usuarioDaRede.usuario : null,
          aberto: true,
          x: event.layerX + 'px',
          y: event.layerY + 'px'
        }
      }
    },
    linkClick: function () {
      var t = this
      return function (event, linkObject) {
        t.informacoes = {
          noDaRede: linkObject.no,
          usuarioDaRede: linkObject.usuarioDaRede,
          aberto: true,
          x: event.layerX + 'px',
          y: event.layerY + 'px'
        }
      }
    }
  },
  mounted: function () {
    NoDaRedeService.carregarNosDaRedeTodos(nosDaRede => { this.nosDaRede = nosDaRede })
    AmbienteDaRedeService.get(ambientes => { this.ambientes = ambientes })
    UsuarioDaRedeService.carregarUsuariosDaRedeTodos(usuariosDaRede => { this.usuariosDaRede = usuariosDaRede })
  },
  components: {
    grafico: D3Network,
    tabelaServidor: TabelaDeInformacaoServidor,
    tabelaNo: TabelaDeInformacaoNoDaRede,
    tabelaUsuario: TabelaDeInformacaoDoUsuario,
    tabelaUsuarioDaRede: TabelaDeInformacaoDoUsuarioDaRede
  }
}
</script>

<style src="vue-d3-network/dist/vue-d3-network.css"></style>

<style type="text/css">
:root {
  --USUARIO-stroke: #000000;
  --USUARIO-fill: #4a4a4a;

  --DESENVOLVIMENTO-stroke: #6c1a6d;
  --DESENVOLVIMENTO-fill: #c840ca;

  --HOMOLOGACAO-stroke: #156643;
  --HOMOLOGACAO-fill: #28b779;

  --LOCAL-stroke: #842e16;
  --LOCAL-fill: #da542e;

  --PRODUCAO-stroke: #14536f;
  --PRODUCAO-fill: #27a9e3;

  --PADRAO-stroke: #b37b22;
  --PADRAO-fill: #ffb848;
}

.close-button {
  position: absolute;
  right: 0;
}

.legenda-label {
  display: inline-block;
  line-height: 20px;
  position: relative;
  top: -5px;
}

.openInformacao {
  -webkit-animation: openInformacao .8s forwards; /* Safari 4.0 - 8.0 */
  animation: openInformacao .8s forwards;
}

@keyframes openInformacao {
    0%   {right: -300px;}
    100% {right: -15px;}
}

.informacao > .informacao-header {
  position: relative;
  border-bottom: 1px solid #cdcdcd;
  padding: 10px;
  background-color: #eeeeee;
}

.informacao > .informacao-header > h4 {
  margin: 0
}

.informacao-body {
  padding: 0 15px
}

.informacao > .informacao-header > h4 > a {
  position: absolute;
  right: 10px;
}

.grafico {
  position: relative;
  margin-top: 80px;
}

.legenda {
  position: absolute;
  top: 30px;
}

.legenda > ul {
  list-style: none;
  padding: 0;
}

.box-legenda {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border-width: 2px;
  border-style: solid;
}

.box-legenda.NENHUM {
  background-color: var(--PADRAO-fill);
  border-color: var(--PADRAO-stroke);
}

.box-legenda.USUARIO {
  background-color: var(--USUARIO-fill);
  border-color: var(--USUARIO-stroke);
}

.box-legenda.DESENVOLVIMENTO {
  background-color: var(--DESENVOLVIMENTO-fill);
  border-color: var(--DESENVOLVIMENTO-stroke);
}

.box-legenda.HOMOLOGACAO {
  background-color: var(--HOMOLOGACAO-fill);
  border-color: var(--HOMOLOGACAO-stroke);
}

.box-legenda.LOCAL {
  background-color: var(--LOCAL-fill);
  border-color: var(--LOCAL-stroke);
}

.box-legenda.PRODUCAO {
  background-color: var(--PRODUCAO-fill);
  border-color: var(--PRODUCAO-stroke);
}

.USUARIO {
  stroke: var(--USUARIO-stroke) !important;
  fill: var(--USUARIO-fill) !important;
}

.DESENVOLVIMENTO {
  stroke: var(--DESENVOLVIMENTO-stroke) !important;
  fill: var(--DESENVOLVIMENTO-fill) !important;
}

.HOMOLOGACAO {
  stroke: var(--HOMOLOGACAO-stroke) !important;
  fill: var(--HOMOLOGACAO-fill) !important;
}

.LOCAL {
  stroke: var(--LOCAL-stroke) !important;
  fill: var(--LOCAL-fill) !important;
}

.PRODUCAO {
  stroke: var(--PRODUCAO-stroke) !important;
  fill: var(--PRODUCAO-fill) !important;
}

.node {
  stroke: var(--PADRAO-stroke) ;
  fill: var(--PADRAO-fill);
  stroke-width: 2px !important; 
}

.link:hover, .node:hover {
  r: 10;
}

@media (max-width: 767px) {
  .informacao {
    position: static;
    width: 100%;
  }
  
  .legenda {
    position: static;
  }
}
</style>