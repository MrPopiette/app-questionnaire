<template>
  <div class="Form">
      <form>
        <label class="label_prenom" name="prenom">Prenom : </label>
        <input required type="text" placeholder="Prenom"/>
        <br>
        <label class="label_nom" name="nom">Nom : </label>
        <input required type="text" placeholder="Nom"/>
        <br>
        <label class="label_societe" name="societe">Votre societe : </label>
        <input required type="text" placeholder="Nom de votre societe"/>
        <br>
        <button type="submit" onclick="login()">Commencer le test</button>
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
     /* methods: {
        login() {
          if(this.input.prenom != "" && this.input.nom != "") {
            if(this.input.prenom == this.$parent.mockAccount.prenom && this.input.nom == this.$parent.mockAccount.nom) {
              this.$emit("authenticated", true);
              this.$router.replace({ name: "SecureConnexion" });
            } else {
              console.log("The username and / or password is incorrect");
            }
          } else {
            console.log("A username and password must be present");
          }
        }
      }*/


    }

</script>

<style scoped>

</style>
