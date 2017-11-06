<template>
  <aside>
    <d3-network :net-nodes="nosDaRede" :net-links="links" :options="options"></d3-network>
  </aside>
</template>

<style src="vue-d3-network/dist/vue-d3-network.css"></style>

<script>
import D3Network from 'vue-d3-network'
// import ServidorService from '@/components/service/servidor'
// import NoDaRedeService from '@/components/service/noDaRede'

export default {
  data: function () {
    return {
      nosDaRede: [
        {id: 1, name: 'Servidor 1'},
        {id: 2, name: 'Servidor 2'},
        {id: 3, name: 'Servidor 3'}
      ],
      links: [
        {sid: 1, tid: 2},
        {sid: 2, tid: 3},
        {sid: 3, tid: 1}
      ],
      options: {
        force: 3000,
        nodeSize: 10,
        nodeLabels: true
      }
    }
  },
  components: {
    D3Network
  }
}
</script>