<template>
  <div class="Form">
    <form>
      <label v-on:input="prenom" class="label_prenom" name="prenom">Prenom : </label>
      <input required type="text" placeholder="Prenom"/>
      <br>
      <label class="label_nom" name="nom">Nom : </label>
      <input required type="text" placeholder="Nom"/>
      <br>
      <label  class="label_societe" name="societe">Votre societe : </label>
      <input required type="text" placeholder="Nom de votre societe"/>
      <br>
      <button type="submit" v-on:click="login()">Commencer le test</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable eqeqeq */

export default {
  name: 'Form',
  data () {
    return {
      input: {
        prenom: '',
        nom: '',
        societe: ''
      }
    }
  },
  methods: {
    login: function () {
      if (this.prenom !== '' && this.nom !== '' && this.societe !== '') {
        console.log('connection')
        // PROD :  location.replace('https://mrpopiette.github.io/?#/questionnaire')
        // DEV :

        location.replace('http://localhost:8080/#/questionnaire')
      } else {
        console.log('SPARTAAAAAAAAAAA')
      }
    }
  },
  computed: {

  }
}

</script>

<style scoped>

</style>
