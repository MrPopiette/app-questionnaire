<template>
  <div class="Form">
    <form>
      <label  class="label_prenom" name="prenom">Prenom : </label>
      <input v-model="prenom" type="text" placeholder="Prenom"/>
      <br>
      <label class="label_nom" name="nom">Nom : </label>
      <input v-model="nom" type="text" placeholder="Nom"/>
      <br>
      <label  class="label_societe" name="societe">Votre societe : </label>
      <input v-model="societe" type="text" placeholder="Nom de votre societe"/>
      <br>
       <button id="text_submit" v-on:click="login()">Commencer le test</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable eqeqeq */

export default {
  name: 'MMForm',
  data : function() {
    return {
        prenom: '',
        nom: '',
        societe: ''

    }
  },
  methods: {
    login: function () {
      if ((this.prenom !== '') && (this.nom !== '') && (this.societe !== '')) {
        console.log('connection');
        this.prenom = '';
        this.nom = '';
        this.societe = '';
        // PROD :  location.replace('https://mrpopiette.github.io/?#/questionnaire')
        // DEV : location.replace('http://localhost:8080/#/questionnaire')

        this.$router.push('questionnaire')
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
