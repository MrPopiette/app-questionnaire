<template>
  <div class="questionnaire">
    <div class="wrapper">
      <div class="box header">
        Question N° (value)
      </div>
      <div class="box question">
        Question a recuperer du JSON
      </div>
      <div class="box reponse">
        <div class="checkbox">
          <ul>
            <input type="checkbox" id="value1"/> <span class="box spanRep"> Rep 1 </span> <br>
            <input type="checkbox" id="value2"/> <span class="box spanRep"> Rep 2 </span> <br>
            <input type="checkbox" id="value3"/> <span class="box spanRep"> Rep 3 </span> <br>
          </ul>
        </div>
        <button type="submit" v-on:click="nextQuestion()"> Send</button>
      </div>
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
import { Component, Vue } from 'vue-property-decorator'
import Question from '@/components/Question.vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import UserDetails from '@/components/UserDetails.vue'
import questionnaireJson from '../assets/questionnaire.json'

function nextQuestion () {
  var questionIterator = 1
  if (questionIterator == questionnaireJson.questionnaire.question.id_question[1]){
    console.log(99999999999999)
  }
  return questionIterator
}

@Component({
  components: {
    UserDetails
  }
})
export default class Questionnaire extends Vue {
  created () {
    nextQuestion()
  }

  data () {
    return {
      myJson: questionnaireJson
    }
  }
}
</script>
