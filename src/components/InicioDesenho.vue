<template>
  <aside>
    <div class="grafico">
      <div class="legenda">
        <ul> 
          <li>
            <h4>Ambientes - <a v-on:click="selecionarAmbiente(null)"><small>Todos Ambientes</small></a></h4>
          </li>
          <li>
            <a v-on:click="selecionarAmbiente('DESENVOLVIMENTO')">
              <span class="box-legenda box-DESENVOLVIMENTO"></span>
              <span class="legenda-label">Desenvolvimento</span>
            </a>
          </li>
          <li>
            <a v-on:click="selecionarAmbiente('HOMOLOGACAO')">
              <span class="box-legenda box-HOMOLOGACAO"></span>
              <span class="legenda-label">Homologação</span>
            </a>
          </li>
          <li>
            <a v-on:click="selecionarAmbiente('LOCAL')">
              <span class="box-legenda box-LOCAL"></span>
              <span class="legenda-label">Local</span>
            </a>
          </li>
          <li>
            <a a v-on:click="selecionarAmbiente('PRODUCAO')">
              <span class="box-legenda box-PRODUCAO"></span>
              <span class="legenda-label">Produção</span>
            </a>
          </li>
          <li>
            <a v-on:click="selecionarAmbiente('PADRAO')">
              <span class="box-legenda box-PADRAO"></span>
              <span class="legenda-label">Nenhum</span>
            </a>
          </li>
        </ul>
      </div>

      <d3-network :net-nodes="nosDaRede" :net-links="links" :options="options" @node-click="nodeClick" @link-click="linkClick"></d3-network>
      <p>Qtd. de nós: {{ nosDaRede.length }}</p>

      <div v-if="informacaoSelecionado" :class="[{ open: informacaoSelecionado }, 'informacao']">
        <div class="informacao-header">
          <h4>Informações<a v-on:click="closeInformacao"><i class="fa fa-close"></i></a></h4>
        </div>
        <div class="informacao-body">
          <tabela-servidor v-if="servidor.id" :servidor="servidor" :aberto="true" nome="servidorSelecionado"></tabela-servidor>

          <div v-if="noDaRede.id" class="widget-box collapsible">
            <div class="widget-title">
              <a data-toggle="collapse" href="#collapseTwo"> 
                <span class="icon"><i class="fa fa-server"></i></span>
                <h5>Informação do Nó</h5>
              </a> 
            </div>
            <div id="collapseTwo" class="collapse in">
              <div class="widget-content">
                <tabela-no :noDaRede="noDaRede" :aberto="true"></tabela-no>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </aside>
</template>

<script>
import D3Network from 'vue-d3-network'
import TabelaDeInformacaoDoServidor from '@/components/servidor/components/TabelaDeInformacao'
import TabelaDeInformacaoDoNo from '@/components/no_da_rede/components/TabelaDeInformacao'
import ServidorService from '@/components/service/servidor'
import NoDaRedeService from '@/components/service/noDaRede'

export default {
  data: function () {
    return {
      ambienteSelecionado: null,
      todosNos: [],
      nosDaRede: [],
      servidores: [],
      informacaoSelecionado: false,
      servidor: {},
      noDaRede: {},
      links: []
    }
  },
  mounted: function () {
    NoDaRedeService.carregarNosDaRedeTodos(todosNos => { this.todosNos = todosNos })
  },
  methods: {
    montarGrafico: function (noDaRede) {
      this.nosDaRede.push({ id: noDaRede.id, name: noDaRede.servidor, servidor: noDaRede.servidor, _cssClass: noDaRede.ambienteDaRede })
      if (noDaRede.proximo != null) this.links.push({ sid: noDaRede.id, tid: noDaRede.proximo })
    },
    selecionarAmbiente: function (ambienteSelecionado) {
      this.ambienteSelecionado = ambienteSelecionado
    },
    closeInformacao: function () {
      this.informacaoSelecionado = false
      this.servidor = {}
      this.noDaRede = {}
    }
  },
  watch: {
    todosNos: function (todosNos) {
      this.todosNos.forEach(noDaRede => this.montarGrafico(noDaRede))
    },
    ambienteSelecionado: function (ambienteSelecionado) {
      this.nosDaRede = []
      this.links = []
      if (ambienteSelecionado == null) this.todosNos.forEach(noDaRede => this.montarGrafico(noDaRede))
      else this.todosNos.forEach(noDaRede => { if (noDaRede.ambienteDaRede === ambienteSelecionado) this.montarGrafico(noDaRede) })
    }
  },
  computed: {
    options: function () {
      return {
        force: 3000,
        nodeSize: 10,
        nodeLabels: true,
        canvas: false
      }
    },
    nodeClick: function () {
      var t = this
      return function (event, nodeObject) {
        t.informacaoSelecionado = true
        ServidorService.procurarServidor(nodeObject.servidor, servidor => { t.servidor = servidor })
      }
    },
    linkClick: function () {
      var t = this
      return function (event, linkObject) {
        t.informacaoSelecionado = true
        NoDaRedeService.procurarNoDaRede(linkObject.sid, noDaRede => { t.noDaRede = noDaRede })
      }
    }
  },
  components: {
    tabelaNo: TabelaDeInformacaoDoNo,
    tabelaServidor: TabelaDeInformacaoDoServidor,
    D3Network
  }
}
</script>

<style src="vue-d3-network/dist/vue-d3-network.css"></style>

<style type="text/css">
:root {
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

.legenda-label {
  display: inline-block;
  line-height: 20px;
  position: relative;
  top: -5px;
}

.informacao {
  position: absolute;
  right: -15px;
  top: 30px;
  width: 35%;
}

.open {
  -webkit-animation: open .8s forwards; /* Safari 4.0 - 8.0 */
  animation: open .8s forwards;
}

@keyframes open {
    0%   {right: -300px;}
    100% {right: -15px;}
}

.informacao > .informacao-header {
  position: relative;
  border-bottom: 1px solid #cdcdcd;
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

.box-legenda.box-PADRAO {
  background-color: var(--PADRAO-fill);
  border-color: var(--PADRAO-stroke);
}

.box-legenda.box-DESENVOLVIMENTO {
  background-color: var(--DESENVOLVIMENTO-fill);
  border-color: var(--DESENVOLVIMENTO-stroke);
}

.box-legenda.box-HOMOLOGACAO {
  background-color: var(--HOMOLOGACAO-fill);
  border-color: var(--HOMOLOGACAO-stroke);
}

.box-legenda.box-LOCAL {
  background-color: var(--LOCAL-fill);
  border-color: var(--LOCAL-stroke);
}

.box-legenda.box-PRODUCAO {
  background-color: var(--PRODUCAO-fill);
  border-color: var(--PRODUCAO-stroke);
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