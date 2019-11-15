<template>
  <div class="about">
    <h1>Connexion au test de securite pour EEV SAS</h1>
    <MMForm></MMForm>
  </div>
</template>

<script lang="ts">
/* eslint-disable indent */

  import { Component, Vue } from 'vue-property-decorator'
  import MMForm from '@/components/MMForm.vue' // @ is an alias to /src

  @Component({
    components: {
      MMForm
    }
  })
  export default class About extends Vue {}
</script>
