<template>
  <div class="box footer">
    {{ myJson.nom }} {{ myJson.prenom }}
  </div>
</template>

<script>
/* eslint-disable indent */
import userJson from '../assets/user.json'

  export default {
    name: 'UserDetails',
    data () {
      return {
        myJson: userJson
      }
    }
  }
</script>

<style scoped>

</style>
