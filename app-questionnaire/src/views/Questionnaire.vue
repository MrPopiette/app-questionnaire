<template>
  <div class="questionnaire">
    <div class="wrapper">
      <div class="box header">
        Question N° {{ MMcompteurQuestion + 1}}
      </div>
      <div class="box question">
        <span> {{ MMmyJson[MMcompteurQuestion].intitule }}</span>
      </div>
      <div class="box reponse">
        <div class="checkbox">
          <input v-model="MMvalue1" type="checkbox" id="value1"/> <span class="box spanRep"> {{MMmyJson[MMcompteurQuestion].reponses[0].value}} </span>
          <br>
          <input v-model="MMvalue2" type="checkbox" id="value2"/> <span class="box spanRep"> {{MMmyJson[MMcompteurQuestion].reponses[1].value}} </span>
          <br>
          <input v-model="MMvalue3" type="checkbox" id="value3"/> <span class="box spanRep"> {{MMmyJson[MMcompteurQuestion].reponses[2].value}} </span>
          <br>
        </div>
        <button v-on:click="MMnextQuestion()"> Question suivante</button>
      </div>

      <!-- Valeur fausse pour futur feature (Recuperation des donnees du formulaire) -->
      <UserDetails></UserDetails>
    </div>
  </div>
</template>

<style scoped>
  body {
    margin: 40px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    grid-template-rows: 100px 100px 100px;
    grid-gap: 10px;
    background-color: #fff;
    color: #444;
  }

  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    /*padding: 20px;*/
    font-size: 150%;
  }

  .header {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 0.5;
    grid-row-end: 1;
  }

  .question {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .reponse {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
  }

  .spanRep {
    grid-column-start: 2;
    grid-column-end: 3;
    font-size: large;
  }

  .footer {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 5;
    grid-row-end: 6;
  }
</style>

<script lang="ts">
  import UserDetails from '@/components/MMUserDetails.vue'
  import MMJson from '../jsons/questionnaire.json'

  export default {
    name: 'questionnaire',
    data () {
      return {
      MMcompteurQuestion: 0,
      MMmyJson: MMJson.question,
      MMcompteurPoints: 0,
      // valeur des checkbox recuperees pour connaitre la bonne reponse et le score, initialisee a faux
      MMvalue1: false,
      MMvalue2: false,
      MMvalue3: false
      }
    },
    components: {
      UserDetails,
    },
    methods: {
      MMnextQuestion: function () {

        console.log("Nbre question :" + (this.MMcompteurQuestion + 1  ));
        this.MMcompteurQuestion++;
        if ((this.MMvalue1 && this.MMmyJson[this.MMcompteurQuestion-1].reponses[0].checked)
          || (this.MMvalue2 && this.MMmyJson[this.MMcompteurQuestion-1].reponses[1].checked)
          || (this.MMvalue3 && this.MMmyJson[this.MMcompteurQuestion-1].reponses[2].checked)) {
          this.MMcompteurPoints++;
        }

        console.log("Nbre bonnes reponses : " + this.MMcompteurPoints);

        if (this.MMcompteurQuestion == MMJson.limite_question) {
          this.$router.push("/");
          // future page de resultat
        } else {
          this.MMvalue1 = false;
          this.MMvalue2 = false;
          this.MMvalue3 = false;
        }
      }
    }
  }
</script>
