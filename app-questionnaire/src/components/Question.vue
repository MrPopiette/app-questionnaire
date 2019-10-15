<template>

  <div class="question">
    <!-- Question a get d'un JSON -->
    <label></label>
  </div>

  <div class="wrapper">
    <div class="box content">Content
      <br/> More content than we had before so this column is now quite tall.
    </div>
    <div class="box footer">Footer</div>
  </div>

</template>

<script>
  export default {
    name: "Question"
  }

  var questionnairevue = new Vue({
    el: "#questionnairevue", // l'élément sur lequel attacher la vue
    created: function () {
      // code lancé au démarrage
    },
    mounted: function () {
      // code lancé quand la vue est attachée à la page
    },
    updated: function () {
      // code lancé quand la vue est mise à jour
    },
    watch: function () {
    },
    destroyed: function () {
      // code lancé quand la vue est détruite
    },
    data: {},
    filters: {},
    methods: {
      // ici les fonctions à rendre disponibles dans le HTML
    },
    computed: {
      // ici on met les données à recalculer à la volée
      // à chaque refresh
    }
  })



</script>

<style scoped>
  body {
    margin: 40px;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .sidebar2 {
    grid-area: sidebar2;
  }

  .content {
    grid-area: content;
  }

  .header {
    grid-area: header;
  }

  .footer {
    grid-area: footer;
  }

  .wrapper {
    background-color: #fff;
    color: #444;
  }

  .wrapper {
    display: grid;
    grid-gap: 1em;
    grid-template-areas: "header" "sidebar" "content" "sidebar2" "footer"
  }

  @media only screen and (min-width: 600px) {
    .wrapper {

      grid-template-columns: 20% auto;
      grid-template-areas: "header   header" "sidebar  content" "sidebar2 sidebar2" "footer   footer";
    }
  }

  @media only screen and (min-width: 800px) {
    .wrapper {
      grid-gap: 20px;
      grid-template-columns: 120px auto 120px;
      grid-template-areas: "header  header  header" "sidebar content sidebar2" "footer  footer  footer";
      max-width: 600px;
    }
  }

  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    font-size: 150%;
  }

  .header,
  .footer {
    background-color: #999;
  }

  .sidebar2 {
    background-color: #ccc;
    color: #444;
  }

</style>
