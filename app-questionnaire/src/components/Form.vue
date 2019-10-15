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
  export default {
    name: "Form",
    data() {
      return {
        input: {
          prenom: "",
          nom: "",
          societe: ""
        }
      }
    },
    methods: {
      login() {
        if (this.input.prenom != "" && this.input.nom != "" && this.input.societe != "") {
          console.log("connection")
        } else {
          console.log("SPARTAAAAAAAAAAA")
        }
      }
    },
    computed: {

    }
  }

</script>

<style scoped>

</style>
