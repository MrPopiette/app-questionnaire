<template>
  <div class="about">
    <h1>Page temporaire pour le formulaire de connexion</h1>
    <Form></Form>
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Form from '@/components/Form.vue' // @ is an alias to /src

  @Component({
    components: {
      Form
    }
  })
  export default class About extends Vue {}
</script>
