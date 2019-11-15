<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MMHelloWorld msg="Bienvenue, veuillez vous connecter sur la page About"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MMHelloWorld from '@/components/MMHelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    MMHelloWorld
  }
})
export default class Home extends Vue {}
</script>
